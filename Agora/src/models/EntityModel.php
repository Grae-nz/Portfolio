<?php
/*
    Manages entity changes in the database.
*/
require_once "framework/MySQLDB.php";

abstract class EntityModel
{
    protected $db;
    protected $table;
    protected $primaryKey;
    protected $fields;
    protected $ID;
    protected $data;
    protected $updates;

	// initializers the database and table name.
    function __construct($db, $table)
    {
        $this->db = $db;
        $this->table = $table;
        $this->fields = [];
        $this->data = [];
        $this->updates = [];
    }

	// Defines the primary key and assigns it's value.
    function defineKey($name, $value)
    {
        $this->primaryKey = $name;
        $this->ID = $value;
    }

	// Defines a field with a format.
    function defineField($name, $format = "alpha")
    {
        $this->fields[$name] = $format;
    }

	// Finds data on specific field and value.
    public function findByField($field, $value)
    {
        if (!array_key_exists($field, $this->fields)) {
            throw new InvalidArgumentException("Field $field is not defined.");
        }

        $dbConn = $this->db->dbConn;
        $stmt = $dbConn->prepare("SELECT * FROM {$this->table} WHERE $field = ? LIMIT 1");
        $stmt->bind_param("s", $value);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result && $result->num_rows > 0) {
            $row = $result->fetch_assoc();

            foreach ($this->fields as $field => $format) {
                $this->data[$field] = $row[$field];
            }
            $stmt->close();
            return true;
        }
        $stmt->close();
        return false;
    }

	// Loads a record based on the primary key value.
    public function load()
    {
        if ($this->ID === null) {
            throw new InvalidArgumentException(
                "Cannot load data without primary key."
            );
        }

        $dbConn = $this->db->dbConn;
        $stmt = $dbConn->prepare("SELECT {$this->fieldNames()} FROM {$this->table} WHERE {$this->primaryKey} = ?");
        $stmt->bind_param("i", $this->ID);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 0) {
            throw new RuntimeException("No record found for ID: " . $this->ID);
        }

        $row = $result->fetch_assoc();
        foreach ($this->fields as $field => $format) {
            $this->data[$field] = $row[$field];
        }
        $stmt->close();
        return true;
    }

	// Gets the primary key for the entity.
    public function getID()
    {
        return $this->ID;
    }

	// Returns the formatted value.
    private function getValueString($field, $value)
    {
        return $this->fields[$field] === "number" ? $value : "'$value'";
    }

	// Checks if updates need to be saved.
    private function needsSave()
    {
        return count($this->updates) > 0;
    }

	// Get's the value from a specified field.
    protected function getValue($key)
    {
        return $this->data[$key] ?? null;
    }

	// Sets a new value for a specified field.
    protected function setValue($key, $value)
    {
        if (!array_key_exists($key, $this->data)) {
            $this->data[$key] = null;
        }
        $oldValue = $this->data[$key];
        if ($value != $oldValue) {
            $this->updates[$key] = $value;
            $this->data[$key] = $value;
        }
    }

	// Returns list of field names for queries.
    private function fieldNames()
    {
        return implode(", ", array_keys($this->fields));
    }
}
?>

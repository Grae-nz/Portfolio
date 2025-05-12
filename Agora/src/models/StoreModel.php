<?php
/*
    Manages the store related operations for the database.
*/
require_once "EntityModel.php";

class StoreModel extends EntityModel
{
    function __construct($db, $storeID = null)
    {
        parent::__construct($db, "Store");
        parent::defineKey("StoreID", $storeID);
        parent::defineField("StoreID", "number");
        parent::defineField("BusinessID");
        parent::defineField("SellerID");
        parent::defineField("StoreName");
        parent::defineField("StoreLocation");

        if ($storeID !== null) {
            parent::load();
        }
    }

    // Saves/creates a new store.
    public function saveStore($businessID, $sellerID, $storeName, $storeLocation)
    {
        $dbConn = $this->db->dbConn;
        $stmt = $dbConn->prepare("INSERT INTO {$this->table} (BusinessID, SellerID, StoreName, StoreLocation) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("iiss", $businessID, $sellerID, $storeName, $storeLocation);
        $result = $stmt->execute();
        $stmt->close();

        return $result ? $dbConn->insert_id : false;
    }

    // Updates an existing store.
    public function updateStore($businessID, $sellerID, $storeName, $storeLocation)
    {
        if (!$this->getID()) {
            throw new Exception("Cannot update store without a valid StoreID.");
        }

        $dbConn = $this->db->dbConn;
        $stmt = $dbConn->prepare("UPDATE {$this->table} SET BusinessID = ?, SellerID = ?, StoreName = ?, StoreLocation = ? WHERE StoreID = ?");
        $storeID = $this->getID();
        $stmt->bind_param("iissi", $businessID, $sellerID, $storeName, $storeLocation, $storeID);
        $result = $stmt->execute();
        $stmt->close();

        return $result;
    }

    // Sets the business ID for the store.
    public function setBusinessID($value)
    {
        $this->setValue("BusinessID", $value);
    }

    // Sets the Seller ID for the store.
    public function setSellerID($value)
    {
        $this->setValue("SellerID", $value);
    }

    // Sets the store name.
    public function setStoreName($value)
    {
        $this->setValue("StoreName", $value);
    }

    // Sets the store location.
    public function setStoreLocation($value)
    {
        $this->setValue("StoreLocation", $value);
    }

    // Gets the store name by seller ID.
    public function getStoreNameBySellerID($sellerID)
    {
        $dbConn = $this->db->dbConn;
        $stmt = $dbConn->prepare("SELECT StoreName FROM {$this->table} WHERE SellerID = ? LIMIT 1");
        $stmt->bind_param("i", $sellerID);
        $stmt->execute();
        $result = $stmt->get_result();
        $store = $result->fetch_assoc();
        $stmt->close();

        return $store['StoreName'] ?? "Store not found";
    }

    // Gets the store ID by seller ID.
    public function getStoreIDBySellerID($sellerID)
    {
        $dbConn = $this->db->dbConn;
        $stmt = $dbConn->prepare("SELECT StoreID FROM {$this->table} WHERE SellerID = ? LIMIT 1");
        $stmt->bind_param("i", $sellerID);
        $stmt->execute();
        $result = $stmt->get_result();
        $store = $result->fetch_assoc();
        $stmt->close();

        return $store['StoreID'] ?? null;
    }

    // Check if the seller is linked to a business.
    public function isSellerLinkedToBusiness($businessID, $sellerID)
    {
        $dbConn = $this->db->dbConn;
        $stmt = $dbConn->prepare("SELECT 1 FROM businessuser WHERE BusinessID = ? AND UserID = ? LIMIT 1");
        $stmt->bind_param("ii", $businessID, $sellerID);
        $stmt->execute();
        $result = $stmt->get_result();
        $isLinked = $result->num_rows > 0;
        $stmt->close();

        return $isLinked;
    }

    // Gets the business ID for the admin.
    public function getBusinessIDByAdmin($adminID)
    {
        $dbConn = $this->db->dbConn;
        $stmt = $dbConn->prepare("SELECT BusinessID FROM Business WHERE AdminID = ? LIMIT 1");
        $stmt->bind_param("i", $adminID);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        $stmt->close();

        return $row['BusinessID'] ?? null;
    }

    // Check if a store exists for the seller.
    public function getExistingStoreID($businessID, $sellerID)
    {
        $dbConn = $this->db->dbConn;
        $stmt = $dbConn->prepare("SELECT StoreID FROM Store WHERE BusinessID = ? AND SellerID = ?");
        $stmt->bind_param("ii", $businessID, $sellerID);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        $stmt->close();

        return $row['StoreID'] ?? null;
    }

    // Gets the store by businessID.
    public function getStoreByBusinessID($businessID)
    {
        $dbConn = $this->db->dbConn;
        $stmt = $dbConn->prepare("SELECT * FROM {$this->table} WHERE BusinessID = ? LIMIT 1");
        $stmt->bind_param("i", $businessID);
        $stmt->execute();
        $result = $stmt->get_result();
        $store = $result->fetch_assoc();
        $stmt->close();

        return $store ?? null;
    }

    // Gets the business ID.
    public function getBusinessID()
    {
        return $this->getValue("BusinessID");
    }

    // Gets the seller ID.
    public function getSellerID()
    {
        return $this->getValue("SellerID");
    }

    // Gets the store name.
    public function getStoreName()
    {
        return $this->getValue("StoreName");
    }

    // Gets the store location.
    public function getStoreLocation()
    {
        return $this->getValue("StoreLocation");
    }
}
?>

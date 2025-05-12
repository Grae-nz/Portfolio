<?php
/*
    Manages the business related operations for the database.
*/
require_once "EntityModel.php";

class BusinessModel extends EntityModel
{
    function __construct($db, $businessID = null)
    {
        parent::__construct($db, "Business");
        parent::defineKey("BusinessID", $businessID);
        parent::defineField("BusinessID", "number");
        parent::defineField("AdminID");
        parent::defineField("BusinessName");
        parent::defineField("Description");
        parent::defineField("LegalBusinessDetails");
        parent::defineField("HQLocation");

        if ($businessID !== null) {
            parent::load();
        }
    }  

    // Handles setting/saving the business details.
    public function saveBusiness()
    {
        $dbConn = $this->db->dbConn;
        $stmt = $dbConn->prepare("INSERT INTO {$this->table} 
            (AdminID, BusinessName, Description, LegalBusinessDetails, HQLocation)
            VALUES (?, ?, ?, ?, ?)");

        $adminID = $this->getAdminID();
        $businessName = $this->getBusinessName();
        $description = $this->getDescription();
        $legalDetails = $this->getLegalBusinessDetails();
        $hqLocation = $this->getHQLocation();

        $stmt->bind_param("issss", $adminID, $businessName, $description, $legalDetails, $hqLocation);
        $stmt->execute();
        $businessID = $stmt->insert_id;
        $stmt->close();

        return $businessID;
    }

    // Handles updating the business details.
    public function updateBusiness()
    {
        if (!$this->getID()) {
            throw new Exception("Cannot update business without a valid BusinessID.");
        }

        $dbConn = $this->db->dbConn;
        $businessName = $this->getBusinessName();
        $description = $this->getDescription();
        $legalDetails = $this->getLegalBusinessDetails();
        $hqLocation = $this->getHQLocation();
        $businessID = $this->getID();

        $stmt = $dbConn->prepare("UPDATE {$this->table} SET BusinessName = ?, Description = ?, LegalBusinessDetails = ?, HQLocation = ? 
                                WHERE BusinessID = ?");
        $stmt->bind_param("ssssi", $businessName, $description, $legalDetails, $hqLocation, $businessID);
        $result = $stmt->execute();
        $stmt->close();

        return $result;
    }

    // Handles removing a user from the businessuser table.
    public function removeUser($userId)
    {
        $dbConn = $this->db->dbConn;

        $stmt = $dbConn->prepare("DELETE FROM businessuser WHERE UserID = ?");
        $stmt->bind_param("i", $userId);
        $result = $stmt->execute();
        $stmt->close();

        return $result;
    }

    // Sets the admin of the business.
    public function linkAdminToBusiness($businessID, $userID)
    {
        $dbConn = $this->db->dbConn;

        $stmt = $dbConn->prepare("INSERT INTO businessuser (BusinessID, UserID, AccountLinked) VALUES (?, ?, 'Yes')");
        $stmt->bind_param("ii", $businessID, $userID);
        $result = $stmt->execute();
        $stmt->close();

        return $result;
    }

    // Sets the adminID for the business.
    public function setAdminID($value)
    {
        $this->setValue("AdminID", $value);
    }

    // Sets the business name.
    public function setBusinessName($value)
    {
        $this->setValue("BusinessName", $value);
    }

    // Sets the business description.
    public function setDescription($value)
    {
        $this->setValue("Description", $value);
    }

    // Sets the legal details for the business.
    public function setLegalBusinessDetails($value)
    {
        $this->setValue("LegalBusinessDetails", $value);
    }

    // Sets the HQ location for the business.
    public function setHQLocation($value)
    {
        $this->setValue("HQLocation", $value);
    }

    // Gets the business ID based on the admin logged in.
    public function getBusinessIDByAdminID($adminID)
    {
        $dbConn = $this->db->dbConn;
        $stmt = $dbConn->prepare("SELECT BusinessID FROM {$this->table} WHERE AdminID = ? LIMIT 1");
        $stmt->bind_param("i", $adminID);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result && $result->num_rows > 0) {
            $row = $result->fetch_assoc();
            return $row["BusinessID"];
        }
        return null;
    }

    // Gets the business name by the user logged in.
    public function getBusinessNameByUserID($userID)
    {
        $dbConn = $this->db->dbConn;

        $stmt = $dbConn->prepare("SELECT BusinessID FROM businessuser WHERE UserID = ? AND AccountLinked = 'Yes' LIMIT 1");
        $stmt->bind_param("i", $userID);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result && $result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $businessID = $row["BusinessID"];

            $stmtBusiness = $dbConn->prepare("SELECT BusinessName FROM {$this->table} WHERE BusinessID = ? LIMIT 1");
            $stmtBusiness->bind_param("i", $businessID);
            $stmtBusiness->execute();
            $resultBusiness = $stmtBusiness->get_result();

            if ($resultBusiness && $resultBusiness->num_rows > 0) {
                $businessRow = $resultBusiness->fetch_assoc();
                return $businessRow["BusinessName"];
            }
        }
        return "N/A";
    }

    // Gets the business of the admin.
    public function getBusinessByAdminID($adminID)
    {
        $dbConn = $this->db->dbConn;

        $stmt = $dbConn->prepare("SELECT * FROM {$this->table} WHERE AdminID = ? LIMIT 1");
        $stmt->bind_param("i", $adminID);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result && $result->num_rows == 1) {
            $row = $result->fetch_assoc();
            $stmt->close();
            return $row;
        }
        $stmt->close();
        return null;
    }

    // Gets the linked users of the business.
    public function getLinkedUsers($businessID)
    {
        $dbConn = $this->db->dbConn;

        $stmt = $dbConn->prepare("SELECT User.UserID, User.username, User.email, User.FullName, User.Role, User.AccountType
                                FROM businessuser 
                                INNER JOIN User ON businessuser.UserID = User.UserID
                                WHERE businessuser.BusinessID = ? AND businessuser.AccountLinked = 'Yes'");
        $stmt->bind_param("i", $businessID);
        $stmt->execute();
        $result = $stmt->get_result();

        $buyers = [];
        $sellers = [];

        while ($row = $result->fetch_assoc()) {
            if ($row['AccountType'] === 'Buyer') {
                $buyers[] = $row;
            } elseif ($row['AccountType'] === 'Seller') {
                $sellers[] = $row;
            }
        }
        $stmt->close();

        return ['buyers' => $buyers, 'sellers' => $sellers];
    }

    // Checks if a buyer is linked to a business.
    public function isBuyerLinkedToBusiness($userID)
    {
        $dbConn = $this->db->dbConn;

        $stmt = $dbConn->prepare("SELECT 1 FROM businessuser WHERE UserID = ?");
        $stmt->bind_param("i", $userID);
        $stmt->execute();
        $result = $stmt->get_result();
        $isLinked = $result->num_rows > 0;
        $stmt->close();
        return $isLinked;
    }

    // Gets the admin ID of the business.
    public function getAdminID()
    {
        return $this->getValue("AdminID");
    }

    // gets the business name.
    public function getBusinessName()
    {
        return $this->getValue("BusinessName") ?? "N/A";
    }

    // Gets the business description.
    public function getDescription()
    {
        return $this->getValue("Description");
    }

    // Gets the legal details for business.
    public function getLegalBusinessDetails()
    {
        return $this->getValue("LegalBusinessDetails");
    }

    // Gets the HQ location for the business.
    public function getHQLocation()
    {
        return $this->getValue("HQLocation");
    }
}
?>

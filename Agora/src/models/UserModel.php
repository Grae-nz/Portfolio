<?php
/*
    Manages the user related operations for the database.
*/
require_once "EntityModel.php";

class UserModel extends EntityModel
{
    function __construct($db, $userID = null)
    {
        parent::__construct($db, "User");
        parent::defineKey("UserID", $userID);
        parent::defineField("UserID");
        parent::defineField("AccountType");
        parent::defineField("Role");
        parent::defineField("UserName");
        parent::defineField("FullName");
        parent::defineField("Password");
        parent::defineField("Email");
        parent::defineField("Location");

        if ($userID != null) {
            parent::load();
        }
    }

    // Sets or updates the user in the database.
    public function saveUser()
    {
    $dbConn = $this->db->dbConn;

    $accountType = $this->getAccountType();
    $role = $this->getRole();
    $username = $this->getUsername();
    $fullName = $this->getFullName();
    $password = $this->getPassword();
    $email = $this->getEmail();
    $location = $this->getLocation();

    $stmt = $dbConn->prepare("INSERT INTO {$this->table} 
        (AccountType, Role, UserName, FullName, Password, Email, Location) 
        VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss",$accountType,$role,$username, $fullName,$password,$email,$location);
    $result = $stmt->execute();
    $stmt->close();

    return $result;
    }   

    // Handles updating the user profile.
    public function updateUserProfile($fullName, $email, $role, $location)
    {
        $dbConn = $this->db->dbConn;
        
        $stmt = $dbConn->prepare("UPDATE {$this->table} SET FullName = ?, Email = ?, Role = ?, Location = ? WHERE UserID = ?");
        $stmt->bind_param("ssssi", $fullName, $email, $role, $location, $this->ID);
        $result = $stmt->execute();
        $stmt->close();

        return $result;
    }

    // Handles inviting users to the business.
    public function InviteUserToBusiness($businessId)
    {
        $dbConn = $this->db->dbConn;
        $stmt = $dbConn->prepare("INSERT INTO businessuser (BusinessID, UserID, AccountLinked) VALUES (?, ?, 'Yes')");
        $userID = $this->getID();
        $stmt->bind_param("ii", $businessId, $userID);
        $result = $stmt->execute();
        $stmt->close();
        return $result;
    }

    // Sets the account type of the user.
    public function setAccountType($value)
    {
        $this->setValue("AccountType", $value);
    }

    // Sets the username of the user.
    public function setUsername($value)
    {
        $this->setValue("UserName", $value);
    }

    // Sets the email for the user.
    public function setEmail($value)
    {
        $this->setValue("Email", $value);
    }

    // Sets the full name for the user.
    public function setFullName($value)
    {
        $this->setValue("FullName", $value);
    }

    // Sets the role for the user.
    public function setRole($value)
    {
        $this->setValue("Role", $value);
    }

    // Sets the password for the user.
    public function setPassword($value)
    {
        $this->setValue("Password", $value);
    }

    // Sets the location of the user.
    public function setLocation($value)
    {
        $this->setValue("Location", $value);
    }

    // Gets the existing buyers in the database.
    public static function getBuyers($db)
    {
        $stmt = $db->dbConn->prepare("SELECT UserID as userId, username, email, FullName, Role FROM User WHERE AccountType = 'Buyer'");
        $stmt->execute();
        $result = $stmt->get_result();
        $buyers = [];
        while ($row = $result->fetch_assoc()) {
            $buyers[] = $row;
        }
        $stmt->close();
        return $buyers;
    }

    // Gets the existing Sellers in the database.
    public static function getSellers($db)
    {
        $stmt = $db->dbConn->prepare("SELECT UserID as userId, username, email, FullName, Role FROM User WHERE AccountType = 'Seller'");
        $stmt->execute();
        $result = $stmt->get_result();
        $sellers = [];
        while ($row = $result->fetch_assoc()) {
            $sellers[] = $row;
        }
        $stmt->close();
        return $sellers;
    }

    // Gets the account type of the user.
    public function getAccountType()
    {
        return $this->data["AccountType"] ?? null;
    }

    // Gets the role of the user.
    public function getRole()
    {
        return $this->data["Role"] ?? null;
    }

    // Gets the username of the user.
    public function getUsername()
    {
        return $this->data["UserName"] ?? null;
    }

    // Gets the full name of the user.
    public function getFullName()
    {
        return $this->data["FullName"] ?? null;
    }

    // Gets the password of the user.
    public function getPassword()
    {
        return $this->data["Password"] ?? null;
    }

    // Gtes the email of the user.
    public function getEmail()
    {
        return $this->data["Email"] ?? null;
    }

    // Gets the location of the user.
    public function getLocation()
    {
        return $this->data["Location"] ?? null;
    }
}
?>

<?php
require_once "siteFunctions/commonFunctions.php";
require_once 'framework/MySQLDB.php';

try {
    $db = getNewDatabase();
    $db->execute("DROP DATABASE IF EXISTS Agora");
    $db->execute("CREATE DATABASE IF NOT EXISTS Agora");
    $db->execute("USE Agora");
    
    $db->execute( "drop table if exists User");
    $db->execute("CREATE TABLE User (
        UserID INT AUTO_INCREMENT PRIMARY KEY,
        AccountType VARCHAR(25) NOT NULL,
        Role VARCHAR(150) NOT NULL,
        UserName VARCHAR(50) UNIQUE NOT NULL,
        FullName VARCHAR(100) NOT NULL,
        Password VARCHAR(255) NOT NULL,
        Email VARCHAR(100) UNIQUE NOT NULL,
        Location VARCHAR(50) NOT NULL
    ) ENGINE=InnoDB");

$db->execute( "drop table if exists Business");
    $db->execute("CREATE TABLE Business (
        BusinessID INT AUTO_INCREMENT PRIMARY KEY,
        AdminID INT NOT NULL,
        BusinessName VARCHAR(100) NOT NULL,
        BusinessLogo BLOB NULL,
        Description TEXT NOT NULL,
        LegalBusinessDetails TEXT NOT NULL,
        HQLocation VARCHAR(150) NOT NULL,
        FOREIGN KEY (AdminID) REFERENCES User(UserID)
    ) ENGINE=InnoDB");

$db->execute( "drop table if exists BusinessUser");
    $db->execute("CREATE TABLE BusinessUser (
        BusinessID INT NOT NULL,
        UserID INT NOT NULL,
        AccountLinked VARCHAR(4) NULL,
        PRIMARY KEY (BusinessID, UserID),
        FOREIGN KEY (BusinessID) REFERENCES Business(BusinessID),
        FOREIGN KEY (UserID) REFERENCES User(UserID)
    ) ENGINE=InnoDB");

$db->execute( "drop table if exists Store");
    $db->execute("CREATE TABLE Store (
        StoreID INT AUTO_INCREMENT PRIMARY KEY,
        BusinessID INT NOT NULL,
        SellerID INT NOT NULL,
        StoreName VARCHAR(100) NOT NULL,
        StoreLocation VARCHAR(100) NOT NULL,
        FOREIGN KEY (BusinessID, SellerID) REFERENCES BusinessUser(BusinessID, UserID)
    ) ENGINE=InnoDB");

$db->execute( "drop table if exists Product");
    $db->execute("CREATE TABLE Product (
        ProductID INT AUTO_INCREMENT PRIMARY KEY,
        StoreID INT NOT NULL,
        ProductName VARCHAR(100) NOT NULL,
        ProductImage BLOB NULL,
        Description TEXT NOT NULL,
        Price DECIMAL(10, 2) NOT NULL,
        ShippingOptions VARCHAR(50) NULL,
        FOREIGN KEY (StoreID) REFERENCES Store(StoreID)
    ) ENGINE=InnoDB");

$db->execute( "drop table if exists Orders");
    $db->execute("CREATE TABLE Orders (
        OrderNum INT AUTO_INCREMENT PRIMARY KEY,
        BuyerID INT NOT NULL,
        ProductID INT NOT NULL,
        Quantity INT NOT NULL,
        OrderDate DATE NOT NULL,
        ShippingOption VARCHAR(8) NOT NULL,
        FOREIGN KEY (BuyerID) REFERENCES BusinessUser(UserID),
        FOREIGN KEY (ProductID) REFERENCES Product(ProductID)
    ) ENGINE=InnoDB");


function loadCSV($db, $tableName, $filePath, $columns)
    {
        if (($handle = fopen($filePath, "r")) !== false) {
            fgetcsv($handle, 1000, ",");

            while (($data = fgetcsv($handle, 1000, ",")) !== false) {
                $placeholders = implode(",", array_fill(0, count($columns), "?"));
                $sql = "INSERT INTO $tableName (" . implode(",", $columns) . ") VALUES ($placeholders)";
                $stmt = $db->dbConn->prepare($sql);
                $stmt->bind_param(str_repeat("s", count($columns)), ...$data);
                $stmt->execute();
            }
            fclose($handle);
        }
    }

    loadCSV($db, "User", "data/user.csv", ["AccountType", "Role", "UserName", "FullName", "Password", "Email", "Location"]);
    loadCSV($db, "Business", "data/business.csv", ["AdminID", "BusinessName", "BusinessLogo", "Description", "LegalBusinessDetails", "HQLocation"]);
    loadCSV($db, "BusinessUser", "data/businessuser.csv", ["BusinessID", "UserID", "AccountLinked"]);
    loadCSV($db, "Store", "data/store.csv", ["BusinessID", "SellerID", "StoreName", "StoreLocation"]);
    loadCSV($db, "Product", "data/product.csv", ["StoreID", "ProductName", "ProductImage", "Description", "Price", "ShippingOptions"]);
    loadCSV($db, "Orders", "data/orders.csv", ["BuyerID", "ProductID", "Quantity", "OrderDate", "ShippingOption"]);


} catch (Exception $ex) {
    print $ex;
}
?>

<?php
/*
    Handles adding a store to a business or updating existing one.
*/
session_start();
require_once "siteFunctions/commonFunctions.php";
require_once "src/models/StoreModel.php";

$db = getDatabase();

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    if (!isset($_SESSION["UserID"])) {
        echo json_encode(["error" => "User not logged in"]);
        exit();
    }

    $sellerID = $_SESSION["UserID"];
    $store = new StoreModel($db);
    $storeName = $store->getStoreNameBySellerID($sellerID);

    echo json_encode(["storeName" => $storeName !== "Store not found" ? $storeName : "Store not found for this seller"]);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (!isset($_SESSION["UserID"])) {
        echo "Error: You must be logged in to add a store.";
        exit();
    }

    $adminID = $_SESSION["UserID"];
    $sellerID = $_POST["sellerID"];
    $storeName = $_POST["storeName"];
    $storeLocation = $_POST["storeLocation"];

    $store = new StoreModel($db);
    $businessID = $store->getBusinessIDByAdmin($adminID);

    if (!$businessID) {
        echo "Error: No business found for this admin.";
        exit();
    }

    if (!$store->isSellerLinkedToBusiness($businessID, $sellerID)) {
        echo "Error: SellerID is not linked to this business.";
        exit();
    }

    $existingStoreID = $store->getExistingStoreID($businessID, $sellerID);

    if ($existingStoreID) {
        $store->defineKey("StoreID", $existingStoreID);
        $result = $store->updateStore($businessID, $sellerID, $storeName, $storeLocation);
    } else {
        $result = $store->saveStore($businessID, $sellerID, $storeName, $storeLocation);
    }

    echo $result ? "success" : "Error: Could not save or update store details.";
}
?>

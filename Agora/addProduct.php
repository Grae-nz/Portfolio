<?php
/*
    Handles adding a new product to the database.
*/
session_start();
require_once "siteFunctions/commonFunctions.php";
require_once "src/models/ProductModel.php";
require_once "src/models/StoreModel.php";

header("Content-Type: application/json");

if (!isset($_SESSION["UserID"])) {
    echo json_encode(["error" => "User not logged in"]);
    exit();
}


$db = getDatabase();
$sellerID = $_SESSION["UserID"];
$store = new StoreModel($db);
$storeID = $store->getStoreIDBySellerID($sellerID);

if (!$storeID) {
    echo json_encode(["error" => "Store not found"]);
    exit();
}

$productName = $_POST["productName"];
$description = $_POST["description"];
$price = $_POST["price"];
$shippingOptions = $_POST["shippingOptions"];
$productImage = null;
if (isset($_FILES["productImage"]) && $_FILES["productImage"]["tmp_name"]) {
    $productImage = file_get_contents($_FILES["productImage"]["tmp_name"]);
}

$product = new ProductModel($db);
$product->setStoreID($storeID);
$product->setProductName($productName);
$product->setDescription($description);
$product->setPrice($price);
$product->setShippingOptions($shippingOptions);
$product->setProductImage($productImage);

$result = $product->saveProduct();

if ($result) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["error" => "Failed to add product"]);
}
?>

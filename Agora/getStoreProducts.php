<?php
/*
    Gets and returns list of products associated with the store.
*/
session_start();
require_once 'siteFunctions/commonFunctions.php';
require_once 'src/models/StoreModel.php';
require_once 'src/models/ProductModel.php';

header('Content-Type: application/json');

if (!isset($_SESSION['UserID'])) {
    echo json_encode(['error' => 'User not logged in']);
    exit;
}

$db = getDatabase();
$sellerID = $_SESSION['UserID'];
$store = new StoreModel($db);
$storeID = $store->getStoreIDBySellerID($sellerID);

if (!$storeID) {
    echo json_encode(['error' => 'Store not found']);
    exit;
}

$product = new ProductModel($db);
$products = $product->getProductsByStoreID($storeID);

echo json_encode(['products' => $products]);
?>

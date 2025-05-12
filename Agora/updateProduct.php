<?php
/*
    Updates specific product in the database.
*/
session_start();
require_once 'siteFunctions/commonFunctions.php';
require_once 'src/models/ProductModel.php';

header('Content-Type: application/json');

$db = getDatabase();
$product = new ProductModel($db);

$productId = $_POST['productId'] ?? null;
$productName = $_POST['productName'] ?? null;
$description = $_POST['description'] ?? null;
$price = $_POST['price'] ?? null;
$shippingOptions = $_POST['shippingOptions'] ?? null;

if (empty($productId)) {
    echo json_encode(['error' => 'Product ID is missing']);
    exit;
}

$result = $product->updateProduct($productId, $productName, $description, $price, $shippingOptions);

if ($result) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['error' => 'Failed to update product']);
}
exit;
?>

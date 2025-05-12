<?php
/*
    Gets and returns the details for a specific product.
*/
require_once 'src/models/ProductModel.php';
require_once 'siteFunctions/commonFunctions.php';

header('Content-Type: application/json');

$db = getDatabase();
$product = new ProductModel($db);

if (!isset($_GET['productId'])) {
    echo json_encode(['success' => false, 'error' => 'Product ID not specified']);
    exit;
}

$productId = $_GET['productId'];
$product = $product->getProductById($productId);

if ($product) {
    echo json_encode(['success' => true, 'product' => $product]);
} else {
    echo json_encode(['success' => false, 'error' => 'Product not found']);
}
?>

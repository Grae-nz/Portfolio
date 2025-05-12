<?php
/*
    Gets and returns all the products available.
*/
session_start();
require_once 'siteFunctions/commonFunctions.php';
require_once 'src/models/ProductModel.php';

header('Content-Type: application/json');

$db = getDatabase();
$product = new ProductModel($db);
$products = $product->getAllProducts();

echo json_encode(['products' => $products]);
?>

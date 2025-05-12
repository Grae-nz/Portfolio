<?php
/*
    Handles creating a new order.
*/
session_start();
require_once 'siteFunctions/commonFunctions.php';
require_once 'src/models/OrderModel.php';
require_once 'src/models/BusinessModel.php';

header('Content-Type: application/json');

$db = getDatabase();

if (!isset($_SESSION['UserID'])) {
    echo json_encode(['error' => 'User not logged in']);
    http_response_code(401);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $buyerID = $_SESSION['UserID'];
    
    $businessUser = new BusinessModel($db);
    if (!$businessUser->isBuyerLinkedToBusiness($buyerID)) {
        echo json_encode(['error' => 'You must be linked with a business to purchase!']);
        http_response_code(403);
        exit;
    }

    $productID = $_POST['productID'];
    $quantity = $_POST['quantity'];
    $shippingOption = $_POST['shippingOption'];

    $order = new OrderModel($db);
    $orderID = $order->saveOrder($buyerID, $productID, $quantity, $shippingOption);

    if ($orderID) {
        echo json_encode(['success' => true, 'message' => 'Order created successfully', 'orderID' => $orderID]);
    } else {
        echo json_encode(['error' => 'Failed to create order']);
        http_response_code(500);
    }
}
?>

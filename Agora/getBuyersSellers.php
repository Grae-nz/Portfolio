<?php
/*
    Gets and returns the individual details for buyers and sellers.
*/
session_start();
require_once 'siteFunctions/commonFunctions.php';
require_once 'src/models/UserModel.php';
require_once 'src/models/BusinessModel.php';

$db = getDatabase();

if (!isset($_SESSION['UserID'])) {
    echo json_encode(['error' => 'User not logged in']);
    exit;
}

$userId = $_SESSION['UserID'];
$business = new BusinessModel($db);
$businessId = $business->getBusinessIDByAdminID($userId);

if (!$businessId) {
    echo json_encode(['error' => 'No business associated with this admin']);
    exit;
}

$buyers = UserModel::getBuyers($db);
$sellers = UserModel::getSellers($db);

header('Content-Type: application/json');
echo json_encode([
    'buyers' => $buyers,
    'sellers' => $sellers,
    'businessId' => $businessId
]);
?>

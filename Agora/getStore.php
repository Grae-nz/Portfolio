<?php
/*
    Gets and returns the store details that are specific to the logged in admin.
*/
session_start();
require_once 'siteFunctions/commonFunctions.php';
require_once 'src/models/BusinessModel.php';
require_once 'src/models/StoreModel.php';

header('Content-Type: application/json');

if (!isset($_SESSION['UserID'])) {
    echo json_encode(['error' => 'User not logged in']);
    exit;
}

$adminID = $_SESSION['UserID'];
$db = getDatabase();
$business = new BusinessModel($db);
$store = new StoreModel($db);

$businessID = $business->getBusinessIDByAdminID($adminID);

if (!$businessID) {
    echo json_encode(['error' => 'No business found for this admin']);
    exit;
}

$storeData = $store->getStoreByBusinessID($businessID);

if ($storeData) {
    echo json_encode([
        'storeName' => $storeData['StoreName'],
        'storeLocation' => $storeData['StoreLocation'],
        'sellerID' => $storeData['SellerID']
    ]);
} else {
    echo json_encode(['error' => 'No store found for this business']);
}
?>

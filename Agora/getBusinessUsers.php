<?php
/*
    Gets and returns the current users of the business.
*/
session_start();
require_once 'siteFunctions/commonFunctions.php';
require_once 'src/models/BusinessModel.php';

if (!isset($_SESSION['UserID'])) {
    echo json_encode(['error' => 'User not logged in']);
    exit;
}

$userId = $_SESSION['UserID'];
$db = getDatabase();
$business = new BusinessModel($db);

$businessId = $business->getBusinessIDByAdminID($userId);

if (!$businessId) {
    echo json_encode(['error' => 'Business ID not found']);
    exit;
}

$linkedUsers = $business->getLinkedUsers($businessId);

header('Content-Type: application/json');
echo json_encode($linkedUsers);
?>

<?php
/*
    Gets and returns the business details for logged in admin.
*/
session_start();
require_once "siteFunctions/commonFunctions.php";
require_once "src/models/BusinessModel.php";

if (!isset($_SESSION["UserID"])) {
    echo json_encode(["error" => "User not logged in"]);
    exit();
}

$adminID = $_SESSION["UserID"];
$db = getDatabase();
$business = new BusinessModel($db);

$business = $business->getBusinessByAdminID($adminID);

if ($business) {
    echo json_encode([
        "businessName" => $business["BusinessName"],
        "description" => $business["Description"],
        "legalDetails" => $business["LegalBusinessDetails"],
        "hqLocation" => $business["HQLocation"],
    ]);
} else {
    echo json_encode(["error" => "No business found"]);
}
?>

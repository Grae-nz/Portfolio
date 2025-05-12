<?php
/*
    Handles adding/updating a new or existing business to the database.
*/
session_start();
require_once "siteFunctions/commonFunctions.php";
require_once "src/models/BusinessModel.php";

$db = getDatabase();

if ($_SERVER["REQUEST_METHOD"] === "GET") {
    if (!isset($_SESSION["UserID"])) {
        echo json_encode(["error" => "User not logged in"]);
        exit();
    }

    $adminID = $_SESSION["UserID"];
    $business = new BusinessModel($db);
    $businessID = $business->getBusinessIDByAdminID($adminID);

    if ($businessID) {
        $business->defineKey("BusinessID", $businessID);
        $business->load();

        echo json_encode(["businessName" => $business->getBusinessName()]);
    } else {
        echo json_encode(["error" => "Business not found for this user"]);
    }
    exit();
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (!isset($_SESSION["UserID"])) {
        echo "Error: You must be logged in to add or update a business.";
        exit();
    }

    $adminID = $_SESSION["UserID"];
    $businessName = $_POST["businessName"];
    $description = $_POST["description"];
    $legalDetails = $_POST["legalDetails"];
    $hqLocation = $_POST["hqLocation"];

    $business = new BusinessModel($db);
    $existingBusinessID = $business->getBusinessIDByAdminID($adminID);

    $business->setAdminID($adminID);
    $business->setBusinessName($businessName);
    $business->setDescription($description);
    $business->setLegalBusinessDetails($legalDetails);
    $business->setHQLocation($hqLocation);

    if ($existingBusinessID) {
        $business->defineKey("BusinessID", $existingBusinessID);
        $updateResult = $business->updateBusiness();
    
        if ($updateResult) {
            echo "success";
        } else {
            echo "Error: Could not update business details.";
        }
    } else {
        $businessID = $business->saveBusiness();
    
        if ($businessID) {
            $linkResult = $business->linkAdminToBusiness($businessID, $adminID);
    
            if ($linkResult) {
                echo "success";
            } else {
                echo "Error: Could not link user to business.";
            }
        } else {
            echo "Error: Could not add new business.";
        }
    }
}
?>

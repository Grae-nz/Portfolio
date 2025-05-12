<?php
/*
    Handles removing a user from a business.
*/
session_start();
require_once 'src/models/BusinessModel.php';
require_once 'siteFunctions/commonFunctions.php';

$data = json_decode(file_get_contents('php://input'), true);
$userId = $data['userId'];

$db = getDatabase();
$businessModel = new BusinessModel($db);

if ($businessModel->removeUser($userId)) {
    echo "User removed successfully.";
} else {
    echo "Error removing user.";
}
?>
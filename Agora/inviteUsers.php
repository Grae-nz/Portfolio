<?php
/*
    Links a specified user to the business.
*/
require_once 'siteFunctions/commonFunctions.php';
require_once 'src/models/UserModel.php';

header('Content-Type: application/json');

$db = getDatabase();

$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];
$username = $data['username'];
$userId = $data['userId'];
$businessId = $data['businessId'];

$user = new UserModel($db, $userId);

if ($user->inviteUserToBusiness($businessId)) {
    echo json_encode(['success' => 'User linked to business successfully.']);
} else {
    echo json_encode(['error' => 'Error linking user to business.']);
}
?>
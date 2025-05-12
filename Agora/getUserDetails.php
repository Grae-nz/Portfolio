<?php
/*
    Gets and returns the details of the logged in user.
*/
session_start();
require_once 'siteFunctions/commonFunctions.php';
require_once 'src/models/UserModel.php';

header('Content-Type: application/json');

if (!isset($_SESSION['UserID'])) {
    echo json_encode(['error' => 'User not logged in']);
    http_response_code(401);
    exit;
}

$userID = $_SESSION['UserID'];
$db = getDatabase();
$user = new UserModel($db, $userID);

if (!$user->load()) {
    echo json_encode(['error' => 'User data could not be loaded.']);
    http_response_code(404);
    exit;
}

echo json_encode([
    'userName' => $user->getUsername(),
    'accountType' => $user->getAccountType(),
]);
?>
<?php
/*
    Checks the users session status and returns details.
*/
session_start();
require_once 'siteFunctions/commonFunctions.php';
require_once 'src/models/UserModel.php';

$response = [
    'loggedIn' => isset($_SESSION['UserID']),
];

if ($response['loggedIn']) {
    $db = getDatabase();
    $user = new UserModel($db, $_SESSION['UserID']);
    $response['userName'] = $user->getUsername();
    $response['accountType'] = $user->getAccountType();
}

header('Content-Type: application/json');
echo json_encode($response);
?>
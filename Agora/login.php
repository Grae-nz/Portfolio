<?php
/*
    Handles user authentication and session.
*/
session_start();
require_once 'siteFunctions/commonFunctions.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userName = $_POST['userName'];
    $password = $_POST['password'];

    $user = getMemberData($userName, $password);

    if ($user && isset($user['userID'])) {
        $_SESSION['UserID'] = $user['userID'];
        $_SESSION['userName'] = $userName;
        $_SESSION['accountType'] = $user['accountType'];

        echo "success";
    } else {
        echo "failure";
    }
}
?>

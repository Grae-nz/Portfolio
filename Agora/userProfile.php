<?php
/*
    Handles getting user profile details and updates.
*/
session_start();
require_once 'siteFunctions/commonFunctions.php';
require_once 'src/models/UserModel.php';
require_once 'src/models/BusinessModel.php';

header('Content-Type: application/json');

$db = getDatabase();

if (!isset($_SESSION['UserID'])) {
    echo json_encode(['error' => 'User not logged in.']);
    http_response_code(401);
    exit;
}

$userID = $_SESSION['UserID'];
$user = new UserModel($db, $userID);
$business = new BusinessModel($db);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if ($user->load()) {
        $businessName = $business->getBusinessNameByUserID($userID);

        $response = [
            'fullName' => $user->getFullName(),
            'email' => $user->getEmail(),
            'role' => $user->getRole(),
            'location' => $user->getLocation(),
            'business' => $businessName
        ];
        echo json_encode($response);
    } else {
        echo json_encode(['error' => 'User data not found']);
        http_response_code(404);
    }
}

elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $fullName = $_POST['fullName'] ?? '';
    $email = $_POST['email'] ?? '';
    $role = $_POST['role'] ?? '';
    $location = $_POST['location'] ?? '';

    if ($user->updateUserProfile($fullName, $email, $role, $location)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['error' => 'Failed to update profile']);
        http_response_code(500);
    }
}
?>

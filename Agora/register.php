<?php
/*
    Handles user registration.
*/
require_once 'siteFunctions/commonFunctions.php';
require_once 'src/models/UserModel.php';

$db = getDatabase();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $accountType = $_POST['accountType'];
        $role = $_POST['role'];
        $userName = $_POST['userName'];
        $fullName = $_POST['fullName'];
        $password = $_POST['password'];
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
        $email = $_POST['email'];
        $location = $_POST['location'];
    
        $existingUser = new UserModel($db, null);
        
        if ($existingUser->findByField('UserName', $userName)) {
            echo "Error: Username already exists! Please choose a different one.";
            exit;
        }
    
        if ($existingUser->findByField('Email', $email)) {
            echo "Error: Email already exists! Please use a different one.";
            exit;
        }
    
        $newUser = new UserModel($db, null);
        $newUser->setAccountType($accountType);
        $newUser->setFullName($fullName);
        $newUser->setUsername($userName);
        $newUser->setRole($role);
        $newUser->setPassword($hashedPassword);
        $newUser->setEmail($email);
        $newUser->setLocation($location);
      
        if ($newUser->saveUser()) {
            echo "Registration successful!";
        } else {
            echo "Error: Could not save user due to an error.";
        }
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
        error_log("Exception in registration: " . $e->getMessage());
    }
}
?>

<?php

include_once ("framework/MySQLDB.php");

// Establishes the database connection.
function getConnection()
{
    $host = "localhost";
    $dbUser = "root";
    $dbPass = "";
    $db = new MySQL($host, $dbUser, $dbPass, null);
    return $db;
}

function getNewDatabase()
{ 
    $db = getConnection();
    $db->execute("CREATE DATABASE IF NOT EXISTS Agora");
    $db->dbName = "Agora";
    $db->selectDatabase();
    return $db;
}

// Gets the database connection.
function getDatabase()
{
    $db = getConnection();
    $db->dbName = "Agora";
    $db->selectDatabase();
    return $db;
}

// Used to prevent sql injections.
function sqlSafe($input)
{
    $db = getDatabase();
    return mysqli_real_escape_string($db->dbConn, stripslashes($input));
}

// Gets the user data in the database.
function getMemberData($username, $password)
{
    $db = getDatabase();
    $dbConn = $db->dbConn;

    $stmt = $dbConn->prepare("SELECT UserID, AccountType, Password FROM user WHERE UserName = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $row = $result->fetch_assoc();
        $storedHash = $row["Password"];
        $userID = $row["UserID"];
        $accountType = $row["AccountType"];

        if (password_verify($password, $storedHash)) {
            return ["userID" => $userID, "accountType" => $accountType];
        }
    }
    
    $stmt->close();
    return null;
}

// Logs the current user out and ends session.
function logout()
{
    session_start();
    unset($_SESSION["UserID"]);
    unset($_SESSION["userName"]);
    session_destroy();
    header("Location: ./html/login.html");
    exit();
}
?>

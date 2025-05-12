<?php
/*
    Uploads an image to the form.
*/
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['businessLogo'])) {
    $directory = 'uploads/';
    $tempFile = $_FILES['businessLogo']['tmp_name'];
    $fileName = uniqid() . '-' . basename($_FILES['businessLogo']['name']);
    $filePath = $directory . $fileName;

    if (move_uploaded_file($tempFile, $filePath)) {
        echo json_encode(['filePath' => $filePath]);
    } else {
        echo json_encode(['error' => 'Failed to upload the file.']);
    }
} else {
    echo json_encode(['error' => 'No file was uploaded.']);
}
?>
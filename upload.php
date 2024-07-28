
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $target_dir = "uploads/"; // Ensure this directory exists
    $target_file = $target_dir . basename($_FILES["photo"]["name"]); // Use the original name or handle renaming

    // Move the uploaded file
    if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
        echo "The file has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
} else {
    echo "Invalid request.";
}
?>

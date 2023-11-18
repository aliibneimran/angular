<?php
include 'connect.php';

$sql = "INSERT INTO tblcontact VALUE(NULL,'$name','$email','$subject','$message')";
$result = $db->query($sql);
if ($result){
    echo json_encode("Successfull");
} else {
    http_response_code(404);
    echo json_encode("Error: " . $db->error);
}

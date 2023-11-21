<?php
include 'connect.php';

$news = [];

$postdata = file_get_contents("php://input");
$result = json_decode($postdata);


if ($result === null && json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON data']);
    exit;
}


if (!property_exists($result, 'id')) {
    http_response_code(400); 
    echo json_encode(['error' => 'Missing or invalid "id" property']);
    exit;
}

$id = $result->id;

$sql = "SELECT * FROM tblposts WHERE id= '$id'";
if ($result = $db->query($sql)) {
    if ($row = $result->fetch_assoc()) {
        $news['id'] = $row['id'];
        $news['PostTitle'] = $row['PostTitle'];
		$news['CategoryId'] = $row['CategoryId'];
        $news['CategoryName'] = $row['CategoryName'];
        $news['SubCategoryId'] = $row['SubCategoryId'];
        $news['PostDetails'] = $row['PostDetails'];
        $news['PostingDate'] = $row['PostingDate'];
        $news['UpdationDate'] = $row['UpdationDate'];
        $news['Is_Active'] = $row['Is_Active'];
        $news['PostUrl'] = $row['PostUrl'];
        $news['PostImage'] = $row['PostImage'];
        $news['viewCounter '] = $row['viewCounter'];
        $news['postedBy'] = $row['postedBy'];
        $news['lastUpdatedBy'] = $row['lastUpdatedBy'];

        echo json_encode(['data' => $news]);
    } else {
        echo json_encode(['error' => 'No data found']);
    }
} else {
    http_response_code(500); // Internal Server Error
    echo json_encode(['error' => 'Database error']);
}
?>


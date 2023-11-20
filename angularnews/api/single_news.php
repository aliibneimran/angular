<?php
include 'connect.php';
$news = [];

$postdata = file_get_contents("php://input");
$result = json_decode($postdata);

$id = $result->id;

$sql = "SELECT * FROM  tblposts WHERE id= '$id'";
if($result = $db->query($sql)){
//     ($row = $result->fetch_assoc());
        // $news['id'] = $row['id'];
		// $news['PostTitle'] = $row['PostTitle'];
		// $news['CategoryId'] = $row['CategoryId'];
		// $news['CategoryName'] = $row['CategoryName'];
		// $news['SubCategoryId'] = $row['SubCategoryId'];
		// $news['PostDetails'] = $row['PostDetails'];
		// $news['PostingDate'] = $row['PostingDate'];
		// $news['UpdationDate'] = $row['UpdationDate'];
		// $news['Is_Active'] = $row['Is_Active'];
		// $news['PostUrl'] = $row['PostUrl'];
		// $news['PostImage'] = $row['PostImage'];
		// $news['viewCounter '] = $row['viewCounter'];
		// $news['postedBy'] = $row['postedBy'];
		// $news['lastUpdatedBy'] = $row['lastUpdatedBy'];
	
	echo json_encode(['data' => $row]);
}
// echo json_encode(['data' => $id]);
else
{
	http_response_code(404);
}

<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("access-control-allow-methods: put,get,post,delete");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$host = "localhost";
$username = "root";
$password = "";
$database = "newsportal";

$db = new mysqli($host,$username,$password,$database);

?>
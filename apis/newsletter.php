<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


function DATABASE_CONNECTION(){
 $hostName = "localhost";
 $userName = "u475896119_kodesfusion";
 $password = "Ronjohnsonowuor@8382";
 $dbName = "u475896119_kodesfusion";
$conn= new mysqli($hostName,$userName,$password,$dbName);
if($conn){
return $conn;
}else{
return null;
}
}

function SEND_MESSAGE(){
$conn = DATABASE_CONNECTION();
$username= $_POST["name"];
$phone= $_POST["phone"];
$message= $_POST["message"];
// prepare and bind
$stmt = $conn->prepare("INSERT INTO message (username,phone,message) VALUES (?,?,?)");
$stmt->bind_param("sis",$username,$phone,$message);  
if($stmt->execute()){
return "message successfull";
}
}
echo SEND_MESSAGE();





?>
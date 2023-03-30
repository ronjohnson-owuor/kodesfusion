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
function INSERT_EMAIL(){
        $conn = DATABASE_CONNECTION();
        $email= $_POST["email"];
        // prepare and bind
      $stmt = $conn->prepare("INSERT INTO newsletter (email) VALUES (?)");
      $stmt->bind_param("s",$email);  
      if($stmt->execute()){
          return "successfully received your email";
      }
      }
      
      
      echo INSERT_EMAIL();
?>
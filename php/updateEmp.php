<?php

	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

    $data = json_decode(file_get_contents("php://input"));

    if($data->id!=""){
        $str = "UPDATE emp set username='$data->username',email='$data->email',contact='$data->contact',password='$data->password' WHERE id='$data->id';";
        $con = mysqli_connect("localhost","root","","newemp");
		$result = mysqli_query($con,$str) or
        die(json_encode(["text"=>"Update Failed" , "class"=>"danger","error"=>mysqli_error($con)]));
        echo json_encode (["text"=>"Update successful", "class"=>"success","error"=>"false"]);
    }
    else{
        echo json_encode(["text"=>"Update Failed" , "class"=>"danger", "error"=>"Request is Empty."]);
    }
?>
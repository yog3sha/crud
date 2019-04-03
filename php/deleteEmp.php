<?php	

	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

	$data = json_decode(file_get_contents("php://input"));
	$str = "DELETE FROM emp WHERE id = '$data'";
	$con = mysqli_connect("localhost","root","","newemp");
	$result = mysqli_query($con, $str) or
	die (json_encode(["text"=>"No Data","class"=>"danger","error"=>mysqli_error($con)]));
	echo 'Record Deleted Successfully!';
?>
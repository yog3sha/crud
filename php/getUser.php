<?php	
	$data = json_decode(file_get_contents("php://input"));
	$str = "SELECT * FROM emp WHERE id = '$data'";
	$con = mysqli_connect("localhost","root","","newemp");
	$result = mysqli_query($con, $str) or
	die (json_encode(["text"=>"No Data","class"=>"danger","error"=>mysqli_error($con)]));
	echo json_encode(mysqli_fetch_assoc($result));	
?>
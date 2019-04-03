<?php
	$array = [];
	$str = "SELECT * FROM emp";
	$con = mysqli_connect("localhost","root","","newemp");
	$result = mysqli_query($con, $str) or
	die (json_encode(["text"=>"No Data","class"=>"danger","error"=>mysqli_error($con)]));
	while ($row=mysqli_fetch_assoc($result)){
		array_push($array,$row);
	}
	echo json_encode($array);
?>
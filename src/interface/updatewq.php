<?php
require('./model/_connect.php');

$name = $_REQUEST['name'];
$type = $_REQUEST['type'];

$sql = "SELECT * FROM `cart` WHERE `product_name`='$name'";
$res = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($res);
$num = $row['product_num'];
if($type=='add'){	
	$num = $num+1;
	$sql = "UPDATE `cart` SET `product_num`='$num' WHERE `product_name`='$name'";
}else{
	$num = $num-1;
	if($num>0){
		$sql = "UPDATE `cart` SET `product_num`='$num' WHERE `product_name`='$name'";
	}
}

$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}
?>
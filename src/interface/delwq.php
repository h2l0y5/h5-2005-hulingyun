<?php
require('./model/_connect.php');
$name = $_REQUEST['name'];
//根据id删除数据
$sql = "DELETE FROM `cart` WHERE `product_name`='$name'";
$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}

?>
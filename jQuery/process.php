<?php
$firstName = $_POST['firstName'];
$lastName  = $_POST['lastName'];
$array     = array("result" => "Your first name is ".$firstName." and last name is ".$lastName);
echo json_encode($array);
?>
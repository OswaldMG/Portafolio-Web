<?php
if(isset($_POST['submit'])){
	$para="osw.mg935@gmail.com";
	$asunto="Enviando informacion";
	$nombre=$_POST['nombre'];
	$correo=$_POST['email'];
	$mensaje=$_POST['mensaje'];
	$headers="MINE-Version: 1.0\r\n";
	$headers="Content-type: text/html; charset=utf8\r\n";
	
}
else{
	echo "Send-SMS Failed"
}
//Api Workers estudia
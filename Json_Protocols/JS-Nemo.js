function sumar(){
	var n1=document.getElementById("num1").value;
	var n2=document.getElementById("num2").value;
	var r=parseInt(n1)+parseInt(n2);
	document.getElementById("resultado").innerHTML=r;
}
function restar(){
	var n1=document.getElementById("num1").value;
	var n2=document.getElementById("num2").value;
	var r=n1-n2;
	document.getElementById("resultado").innerHTML=r;
}
function multiplicar(){
	var n1=document.getElementById("num1").value;
	var n2=document.getElementById("num2").value;
	var r=parseInt(n1)*parseInt(n2);
	document.getElementById("resultado").innerHTML=r;
}
function dividir(){
	var n1=document.getElementById("num1").value;
	var n2=document.getElementById("num2").value;
	var r=parseInt(n1)/parseInt(n2);
	document.getElementById("resultado").innerHTML=r;
}
function promediar(){
	var n1=document.getElementById("num1").value;
	var n2=document.getElementById("num2").value;
	var r=(parseInt(n1)+parseInt(n2))/2;
	document.getElementById("resultado").innerHTML=r;
}
function subcadena(){
	var cadena=document.getElementById("num1").value;
	var cadena2=cadena.substring("3,6");
	document.getElementById("resultado").innerHTML=cadena2;
}
function separ(){
	var cadena=document.getElementById("num1").value;
	var letra=document.getElementById("num2").value;
	var cadena2=cadena.split(",");
	document.getElementById("resultado").innerHTML=cadena2[letra-1];
}

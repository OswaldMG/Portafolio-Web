var cadena=prompt("Escribe tu nombre","nombre");
alert("Hola "+cadena);

var num1=prompt("Escribe Un Numero","");
var num2=prompt("Escribe Otro Numero","");
var suma=parseInt(num1)+parseInt(num2);
alert("La suma es "+suma);
//parse prefijo para convertir variables a tipo de dato
var suma=parseFloat(num1)+parseFloat(num2);
alert("La suma es "+suma);

/*var cadena=prompt("Escribe una cadena");*/
/*Te devuelve la cantidad de caracteres que tiene una cadena(texto)*/
var longitud=cadena.length;
alert("La longitud de tu nombre es: "+longitud);
/*Concadena/Une cadenas(texto) en una sola*/
var cadena2=cadena.concat(" Bienvenido a JavaScript");
alert("Mensajes concadenados: "+cadena2)
/*Devuelve la cadena(texto) en mayusculas*/
cadena2=cadena.toUpperCase();
alert("Cadena en mayusculas mayores: "+cadena2);
/*Devuelve la cadena(texto) en minusculas*/
var cadena2=cadena.toLowerCase();
alert("Cadena en minusculas menores: "+cadena2);
/*Devuelve el caracter que esta en la posicion que escojamos desde 0*/
cadena2=cadena.charAt(1);
alert("El caracter de la semana es: "+cadena2);
/**/

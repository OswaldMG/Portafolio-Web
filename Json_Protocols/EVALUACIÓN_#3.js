function palindromo(){//Funcion para validar el palindromo
    var cadena=document.getElementById("name").value;
    //En la variable resultado se almacena la variable "cadena"
    //Se almacena entre comillas con "La frase" al inicio del nuevo string
    //Tiene un salto de linea
    //Esta variable solo servira para mostrarla en el programa como una simple alerta
    let resultado = "La frase \"" + cadena + "\" \n";
    //La variable "cadenaOriginal" contiene la cadena en minusculas
    //Esto servira para comparar mejor su mejor validacion
    let cadenaOriginal = cadena.toLowerCase();
    //En caso de que el string tenga espacios, split se encargara de eliminarlos
    //Asi ya no seran un problema al momento de hacer la validacion
    //El string depurado se guardara en "letrasEspacios"
    //Nota: el separador por defecto de split es una coma ","
    //si se imprime el codigo apareceran las secciones separadas por comas
    let letrasEspacios = cadenaOriginal.split(" ");
    //String vacia "cadenaSinEspacios"
    //Este string servira para comparar el strinf principal
    let cadenaSinEspacios = "";
    //El for sirve para copiar letra por letra letrasEspacios hacia cadenaSinEspacios
    for (i in letrasEspacios) {
        if (letrasEspacios[i] != " ") {//Si no es un espacio en blanco
            //Copiara el caracter de la posicion i y lo sumara al string "cadenaSinEspacios"
            cadenaSinEspacios += letrasEspacios[i];
            //Este if es solo un seguro para volver a validar que no existen espacios que incomoden a la validacion
            //Aunque si remueves el condicional if el programa sigue funcionando igual
            //esto ya que con split eliminamos los espacios
        }
    }
    //Y volvemos a depurar el string para ahora recortar
    //Aunque la siguiente sentencia no es necesaria la que le sigue despues si
    //Esta vuelve a fragmentar el string letra por letra
    let letras = cadenaSinEspacios.split("");
    //Sin embargo, aqui al dividirse letra por letra, nos sirve pues lo hace con una version inversa de la sentencia
    //Esto gracias la funcion reverse
    let letrasReves = cadenaSinEspacios.split("").reverse();
    //Declaramos una variable booleana para nuestra comparacion
    let iguales = true;
    //Aqui se comparan letra por letra para ver si coinciden en al derechoy al revez
    for (i in letras) {
        if (letras[i] == letrasReves[i]) {//Si si sn iguales no pasara nada
        } else {iguales = false;}//Si no lo son entonces nuestro booleano se hara falso
    }//Esto funciona como una bandera que nos avisa que debemos aplicar una u otra sentencia
    if(iguales) {resultado += " es un palíndromo";}//En este caso si es..
    else {resultado += " no es un palíndromo";}//O no un palindromo
    //Al final se imprime la sentencia final en el id resultado,
    document.getElementById("resultado").innerHTML=resultado;
}
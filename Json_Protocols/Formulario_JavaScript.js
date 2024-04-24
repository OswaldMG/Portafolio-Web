function evalua(){
	prefix="La cadena de caracteres ";
	var cadena=document.getElementById("name").value;
	cadenaUp=cadena.toUpperCase();
	cadenaLow=cadena.toLowerCase();
	/*var large=cadena.length;
	var prueba=0;*/

	if (cadena==cadenaUp) {
		var txt=prefix+cadena.concat(" contiene solamente mayúsculas");
	}else {
		if (cadena == cadenaLow) {
			var txt = prefix + cadena.concat(" contiene solamente minúsculas");
		} else {
			var txt = prefix + cadena.concat(" contiene mayúsculas y minúsculas");
		}
	}

	document.getElementById("resultado").innerHTML=txt;
}

/*Reconozco de sobra que el siguiente proceso con la construccion actual es completamente inutil
* pero lo dejo por dos razones: Una para documentacion para el futuro, uno nunca sabe
* la segunda por que en el codigo original esto servia para poder identificar strings convinados
* de forma mas dinamica pero debido a la falta de else if y la impracticidad que implica seria
* mejor simplemente poner
* 	var txt = prefix + cadena.concat(" contiene mayúsculas y minúsculas");
* en el else y punto*/

/*for (var i = 0; i < large; i++) {
	inicial = cadena.charAt(0);
	inUp = inicial.toUpperCase();
	inLow = inicial.toLowerCase();
	if (inicial == inUp) {
		seg = cadena.charAt(i + 1);
		segDif = seg.toLowerCase();
		if (seg != " ") {
			if (seg == segDif) {
				prueba = 1;
				break;
			}
		}
	}
	if (inicial == inLow) {
		seg = cadena.charAt(i + 1);
		segDif = seg.toUpperCase();
		if (seg != " ") {
			if (seg == segDif) {
				prueba = 1;
				break;
			}
		}
	}
}
if (prueba == 1) {
	var txt = prefix + cadena.concat(" contiene mayúsculas y minúsculas");
}*/
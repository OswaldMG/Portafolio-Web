function generarTabla() {
    var numero = prompt("Ingrese un número para generar la tabla de multiplicar:");
    var tablaHTML = "<h2>Tabla de Multiplicar del " + numero + "</h2>";
    tablaHTML += "<table>";

    for (var i = 1; i <= 10; i++) {
        tablaHTML += "<tr>";
        tablaHTML += "<td>" + numero + " x " + i + "</td>";
        tablaHTML += "<td>=</td>";
        tablaHTML += "<td>" + (numero * i) + "</td>";
        tablaHTML += "</tr>";
    }

    tablaHTML += "</table>";

    document.getElementById("tabla").innerHTML = tablaHTML;
}
function genera_rfc(){
     SurP=document.getElementById("paterno").value;
     SurP2=SurP.charAt(0);
     SurP3=SurP.charAt(1);
    SurP4=SurP3.toUpperCase();
    SurM=document.getElementById("materno").value;
    SurM2=SurM.charAt(0);
    Nom=document.getElementById("nombre").value;
    Nom2=Nom.charAt(0);
    var anio=document.getElementById("anio").value;
    yearA=anio.charAt(2);
    yearB=anio.charAt(3);
    yearT=yearA+yearB;
    mes=document.getElementById("mes").value;
    dia=document.getElementById("dia").value;
    txt=SurP2+SurP4+SurM2+Nom2+yearT+mes+dia;
    document.getElementById("resultado").innerHTML=txt;
}

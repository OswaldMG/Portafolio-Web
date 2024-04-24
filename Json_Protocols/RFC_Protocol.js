function genera_rfc(){
    var SurP=document.getElementById("cadena2").value;
    var SurM=document.getElementById("cadena3").value;
    var name=document.getElementById("cadena").value;
    var year=document.getElementById("year").value;
    var month=document.getElementById("month").value;
    var day=document.getElementById("day").value;

    first=SurP.charAt(0)+SurP.charAt(1);
    second=SurM.charAt(0);
    third=name.charAt(0);
 //   fourth=year.split("year,2");
 //   last=month.concat(day);
    var texto=(first+second+third).value;
    document.getElementById("r").innerHTML=texto;
}
let slideIndex = 0;//Se declara una variable
showSlides();//Funcion para que se muevan

function showSlides() {
  const slides = document.querySelectorAll('.carousel-content img');
  //Esta constante engloba a los objetos dentro del contenedor carousel-content
  for (let i = 0; i < slides.length; i++) {
    //De acuerdo a la cantidad de imagenes se repetira el ciclo
    slides[i].classList.remove('active');
    //A los objetos dentro de la clase carousel-content le otorga la propiedad active
    //La propiedad active muestra el objeto en cuestion
    /*Se utiliza un ciclo for para poder ir mostrando los objetos (imagenes) dentro
    del contenedor uno por uno*/
  }
  slideIndex++;//Aumenta la variable
  if (slideIndex > slides.length) { slideIndex = 1; }
  //Si la variable slideIndex se pasa del numero de objetos (imagenes) el contador se reinicia
  //Esto sirve para vovler a mostrar las imagenes
  slides[slideIndex - 1].classList.add('active');
  //Desplaza la imagen y activa la siguiente
  setTimeout(showSlides, 2000);
  //El tiempo que tarda en hacerse el cambio entre imagenes
}

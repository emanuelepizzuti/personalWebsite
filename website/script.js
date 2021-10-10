var slideIndex = 0;
showSlides();

function showSlides() { // Slideshow immagini
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}

  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 500); // Change image every 2 seconds
}

function ShowImage(src) { // Mostra immagini con over su testo
  var img = document.getElementById('popupImage');
  img.src = src;
  img.style.display = "block";
}

$(document).mousemove(function (e) {
  $(".pointer").css({ left: e.pageX, top: e.pageY });
});

function HideImage() {
  document.getElementById('popupImage').style.display = "none";
}

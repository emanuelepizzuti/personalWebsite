$(document).ready(function() {

  var control = true;
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  })

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))

  $(".switch-button").click(function() {
    $("body, html").toggleClass("body-colormode");
    if (control) {
      $(".switch-button").addClass("switch-button-white");
      $(".nav-menu").addClass("body-colormode");
      $(".text2").removeClass("noDisplay");
      $(".text").addClass("noDisplay");
      control = false;
    } else if (control == false) {
      $(".switch-button").removeClass("switch-button-white");
      $(".nav-menu").removeClass("body-colormode");
      $(".text").removeClass("noDisplay");
      $(".text2").addClass("noDisplay");
      $(".contacts").removeClass("noDisplay");
      control = true;
    }
  });

  // QUI IL TESTO CHE CAMBIA CON LE COSE CHE CI PIACCIONO
  setInterval(changeText, 4000);
  setInterval(changeText2, 5000);

  function changeText2() {
    var arr = ["super hero is Spider-Man", "character from The Office is Kevin Malone", "anime is Kiseiju"];
    var x = document.getElementById("spiderman");
    if (x.innerHTML === "super hero is Spider-Man") {
      x.innerHTML = arr[1];
    } else if (x.innerHTML === "character from The Office is Kevin Malone") {
      x.innerHTML = arr[2];
    } else if (x.innerHTML === "anime is Kiseiju") {
      x.innerHTML = arr[0];
    }
  }

  function changeText() {
    var arr2 = ["coffee", "going to music concerts", "the mountain"];
    var x = document.getElementById("pizza");
    if (x.innerHTML === "coffee") {
      x.innerHTML = arr2[1];
    } else if (x.innerHTML === "going to music concerts") {
      x.innerHTML = arr2[2];
    } else if (x.innerHTML === "the mountain") {
      x.innerHTML = arr2[0];
    }
  }
});

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
    var arr = ["super hero is spiderman", "tv show is the office", "anime is Attack on Titan"];
    var x = document.getElementById("spiderman");
    if (x.innerHTML === "super hero is spiderman") {
      x.innerHTML = arr[1];
    } else if (x.innerHTML === "tv show is the office") {
      x.innerHTML = arr[2];
    } else if (x.innerHTML === "anime is Attack on Titan") {
      x.innerHTML = arr[0];
    }
  }

  function changeText() {
    var arr2 = ["pizza", "coffee", "LRDL"];
    var x = document.getElementById("pizza");
    if (x.innerHTML === "pizza") {
      x.innerHTML = arr2[1];
    } else if (x.innerHTML === "coffee") {
      x.innerHTML = arr2[2];
    } else if (x.innerHTML === "LRDL") {
      x.innerHTML = arr2[0];
    }
  }
});

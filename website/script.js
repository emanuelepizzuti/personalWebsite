var control = true;

$(document).ready(function() {
  $(".text").lettering('words');
  setInterval(changeImg, 2000);

  function changeImg() {
    var x = document.getElementById("spiderman");
    if (x.innerHTML === "spiderman") {
      x.innerHTML = "🕷 🕷 🕷 🕷";
    } else {
      x.innerHTML = "spiderman";
    }

    var x = document.getElementById("pizza");
    if (x.innerHTML === "pizza") {
      x.innerHTML = "🍕 🍕";
    } else {
      x.innerHTML = "pizza";
    }
  }
});

$(".switch-button").click(function() {
  $("body, html").toggleClass("body-colormode");

  if (control) {
    $(".switch-button").addClass("switch-button-white");
    $(".text2").removeClass("noDisplay");
    $(".text").addClass("noDisplay");

    control = false;
  } else if (control == false) {
    $(".switch-button").removeClass("switch-button-white");
    $(".text").removeClass("noDisplay");
    $(".text2").addClass("noDisplay");
    $(".contacts").removeClass("noDisplay");
    control = true;
  }
});

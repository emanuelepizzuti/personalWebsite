var control = true;

$(".switch").click(function() {
  $("body, html").toggleClass("body-colormode");

  if (control) {
    $(".switch").html("<-- back to easy mode");
    $(".text2").removeClass("noDisplay");
    $(".text").addClass("noDisplay");



    var timer = clearInterval(timer);

    setInterval(changeImg, 1000);

    function changeImg() {
      // TO DO
      // $(".spiderman").toggleClass("spidermanImg");
      // $(".spiderman").html("🕸 🕸 🕸 🕸");
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


    control = false;
  } else if (control == false) {

    clearInterval(timer);
    $(".switch").html("click here to switch to pro mode -->");
    $(".text").removeClass("noDisplay");
    $(".text2").addClass("noDisplay");
    $(".contacts").removeClass("noDisplay");
    control = true;

  }
});
// You do this by setting up a boolean check flag like
// var isRecursiveOn = true;  // by default it will be true
// var interval;
    // button.onclick = function () {
       // if  (isRecursionOn) {  // check the flag
            // isRecursiveOn = false;
            // interval = setInterval(slideShow, 2000); // assigned to a variable
       // } else {
           // clearInterval(interval);
           // isRecursiveOn = true; //reset it
       // }
    // }

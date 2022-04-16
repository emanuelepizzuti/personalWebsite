$(".switch").click(function() {
  $("body, html, .switch, #bottomText").toggleClass("body-colormode");
  $("header, .text, .text2, .linkUni, .contacts, .switch, #bottomText").toggleClass("text-colormode");

  if ($(".switch").hasClass("body-colormode")) {
    $(".switch").html("<-- back to easy mode");
    $(".text2").removeClass("noDisplay");
    $(".text").addClass("noDisplay");
    $(".contacts").addClass("noDisplay");

    $("body").gradientify({
      gradients: [
        { start: [237,85,101], stop: [218,68,83] },
        { start: [70,207,176], stop: [52,188,157] },
        { start: [52,152,219], stop: [41,128,185] }
      ]
    });
  } else {
    $(".switch").html("click here to switch to pro mode -->");
    $(".text").removeClass("noDisplay");
    $(".text2").addClass("noDisplay");
    $(".contacts").removeClass("noDisplay");
  }
});

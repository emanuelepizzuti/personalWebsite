$(".switch").click(function() {
  $("body, html, .switch, #bottomText").toggleClass("body-darkmode");
  $("header, .text, .text2, .linkUni, .contacts, .switch, #bottomText").toggleClass("text-darkmode");

  if ($(".switch").hasClass("body-darkmode")) {
    $(".switch").html("<-- back to easy mode");
    $(".text2").removeClass("noDisplay");
    $(".text").addClass("noDisplay");
    $(".contacts").addClass("noDisplay");
  } else {
    $(".switch").html("click here to switch to pro mode -->");
    $(".text").removeClass("noDisplay");
    $(".text2").addClass("noDisplay");
    $(".contacts").removeClass("noDisplay");
  }
});

$(".spiderman").click(function() {
  $(".name").html("⚠ wallpaper zone");
  $("#snow").removeClass("noDisplay");
  $("footer").addClass("noDisplay");
  $(".exit-wp").removeClass("noDisplay");
})

$(".exit-wp").click(function() {
  $(".name").html("emanuelepizzuti");
  $("#snow").addClass("noDisplay");
  $("footer").removeClass("noDisplay");
  $(".exit-wp").addClass("noDisplay");
})

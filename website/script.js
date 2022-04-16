var control = true;

$(".switch").click(function() {
      $("body, html").toggleClass("body-colormode");

      if (control) {
        $(".switch").html("<-- back to easy mode");
        $(".text2").removeClass("noDisplay");
        $(".text").addClass("noDisplay");
        $(".contacts").addClass("noDisplay");

        control = false;

        // $("body, html").gradientify({
        //   gradients: [{
        //       start: [237, 85, 101],
        //       stop: [218, 68, 83]
        //     },
        //     {
        //       start: [70, 207, 176],
        //       stop: [52, 188, 157]
        //     },
        //     {
        //       start: [52, 152, 219],
        //       stop: [41, 128, 185]
        //     }
        //   ]
        // });
      } else if (control == false){
        $(".switch").html("click here to switch to pro mode -->");
        $(".text").removeClass("noDisplay");
        $(".text2").addClass("noDisplay");
        $(".contacts").removeClass("noDisplay");
        control = true;
}

      });

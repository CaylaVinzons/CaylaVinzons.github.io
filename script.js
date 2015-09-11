$(document).ready(function(){

   $(".bgimage").interactive_bg({
       strength: 10,
       scale: 1,
       animationSpeed: "100ms",
       contain: true,
       wrapContent: false
   }); // function call
   $('#content').css(
       'opacity','1'
   );
   $('#ontentc').fadeIn();
});



$(window).resize(function() {
    $(".bgimage > .ibg-bgimage").css({
      width: $(window).outerWidth(),
      height: $(window).outerHeight()
    })
  })
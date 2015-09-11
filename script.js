$(document).ready(function(){

   $(".bgimage").interactive_bg({
       strength: 10,
       scale: 1,
       animationSpeed: "100ms",
       contain: true,
       wrapContent: false
   }); // function call
   $( "#content:hidden:first" ).fadeIn( 3000 );
   $('#sidebar').slideDown();
   $('a[data-mailto]').click(function(){
  var link = 'mailto.html#mailto:' + $(this).data('mailto');
  window.open(link, 'Mailer');
  return false;
});
});



$(window).resize(function() {
    $(".bgimage > .ibg-bgimage").css({
      width: $(window).outerWidth(),
      height: $(window).outerHeight()
    })
  })
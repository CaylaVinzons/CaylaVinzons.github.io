var navClose = true;
$(document).ready(function() {
    $('#close').hide();
    $('.mdropdown').hide();

    $('.mnav').click(function() {
        if (navClose) {
            $('#hamburger').hide();
            $('#close').show();
            $('.mdropdown').show();
        } else {
            $('.mdropdown').hide();
            $('#close').hide();
            $('#hamburger').show();
        }
        navClose = !navClose;
    })

    $('.overlay').mouseover(function() {
        $(this).animate({
            opacity:1,
        }, 500, "swing", function(){
        })
    });

    $('.overlay').mouseleave(function() {
        $(this).animate({
            opacity:0,
        }, 100, "swing", function(){
        })
    });
});
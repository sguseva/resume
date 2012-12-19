$(function() {
    var mainMenuId = "#mainmenu";
    
    var offset = $(mainMenuId).offset();
    var topPadding = 10;

    $(window).scroll(function() {
        if ($(window).scrollTop() > offset.top) {
            $(mainMenuId).css("marginTop", $(window).scrollTop() - offset.top + topPadding)
        } else {
            $(mainMenuId).css("marginTop", 0);
        };
    });

    $(document).ready(function() {
		$(".fancybox").fancybox();
	});
});
var scrollpos = 0;

$(document).ready(function($){
	
	$(".HUD_main").load("/static/html/HUD.html");
	$(".footer_main").load("/static/html/footer.html");
	
    $(document).delegate(".HUD_nav_btn", "click", function(){
        $(".HUD_dropdown").toggleClass("visible");
    });
    $(document).delegate(document, "click", function(e){
        if( !($(e.target).is(".HUD_main *")) && $(".HUD_dropdown").hasClass("visible") )
            $(".HUD_dropdown").toggleClass("visible");
    });
	
	$(document).delegate(".HUD_DE", "mouseenter mouseleave", function(e){
			$(this).children(".HUD_DE_dropdown").toggleClass("visible");
	});
	
	$(document).delegate(document, "scroll", function(){
		var currscroll = $(document).scrollTop();
		var HUDheight = $(".HUD_main").height();
		if (currscroll <= HUDheight){
			$(".HUD_main").addClass("visible");
		}else if( currscroll > scrollpos ){
			if ($(".HUD_main").hasClass("visible") &&  !($(".HUD_dropdown").hasClass("visible")) )
				$(".HUD_main").removeClass("visible");
		} else {
			if ( !($(".HUD_main").hasClass("visible")) )
				$(".HUD_main").addClass("visible");
		}
		scrollpos = currscroll
	});

	
});


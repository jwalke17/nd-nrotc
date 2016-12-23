var scrollpos = 0;
var min_height = 60;

$(document).ready(function($){
	
	$(".HUD_main").load("/static/html/HUD.html");
	
    $(document).delegate(".HUD_nav_btn", "click", function(){
        $(".HUD_dropdown").toggleClass("visible");
    });
    $(document).delegate(document, "click", function(e){
        if( !($(e.target).is(".HUD_main *")) && $(".HUD_dropdown").hasClass("visible") )
            $(".HUD_dropdown").toggleClass("visible");
    });
	
	$(document).delegate(document, "scroll", function(){
		var currscroll = $(document).scrollTop();
		if (currscroll <= min_height){
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


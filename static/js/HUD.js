$(document).ready(function($){
    $(document).delegate(".HUD_nav_btn", "click", function(){
        $(".HUD_dropdown").toggleClass("visible");
    });
    $(document).delegate("main", "click", function(){
        if( $(".HUD_dropdown").hasClass("visible") )
            $(".HUD_dropdown").toggleClass("visible");
    });
});

window.onload = function() {
	$(".HUD_main").load("/static/html/HUD.html");
};

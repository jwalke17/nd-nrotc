$(document).ready(function($){
    $(".HUD_nav_btn").click(function(){
        $(".HUD_dropdown").toggleClass("visible");
    });
    $("main").click(function(){
        if( $(".HUD_dropdown").hasClass("visible") )
            $(".HUD_dropdown").toggleClass("visible");
    });
	
	$("nav.HUD_dropdown span").click(function() {
		var page = "";
		page = $(this).attr("id");
		$("main").load("/static/html/" + page + ".html");
		$("main").click();
	});
    
});

window.onload = function() {
	$('main').load("/static/html/main.html");
}
$(document).ready(function($){
    $(".HUD_nav_btn").click(function(){
        $(".HUD_dropdown").toggleClass("visible");
    });
    $("main").click(function(){
        if( $(".HUD_dropdown").hasClass("visible") )
            $(".HUD_dropdown").toggleClass("visible");
    });
	
	$(".HUD_navigate").click(function() {
		var page = "";
		page = $(this).attr("data_page");
		$("main").load("/static/html/" + page + ".html");
		$("main").click();
	});
    
});

window.onload = function() {
	$('.HUD_main').load("/static/html/HUD.html")
}
$(document).ready(function($){
    $(".HUD_nav_btn").click(function(){
        $(".HUD_dropdown").toggleClass("visible");
    });
    $("main").click(function(){
        if( $(".HUD_dropdown").hasClass("visible") )
            $(".HUD_dropdown").toggleClass("visible");
    });
    
});
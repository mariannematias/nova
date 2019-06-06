$(document).ready(function(){
    $("a.scroll-btn").click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1200);
    });
});
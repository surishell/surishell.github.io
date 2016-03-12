var dp = jQuery;
dp.noConflict();
dp(document).ready(function() {

    //SMOOTH SCROLL 
    dp('.sscroll').bind('click.smoothscroll', function(e) {
        e.preventDefault();
        dp('html,body').animate({
            scrollTop: dp(this.hash).offset().top
        }, 1200);
    });
    //BIG SLIDE
    dp('#home-slide').superslides({
        animation: 'fade', // You can choose either fade or slide
        play: 6000,
        pagination: false
    });
    //FIT VIDS
    if (dp.fn.fitVids) {
        dp(".fitvids").fitVids();
    }

});
dp(window).load(function() {
    dp('#loader').fadeOut(1000, "linear");
});
$(document).ready(function () {
    $(document).ready(function () {
        // Toggle hamburger menu and slide toggle menu
        $(".hamburger-menu").click(function () {
            $(this).toggleClass("open");
            $(".menu").slideToggle();
        });
    
        // Add an active class in <a> tag for menu items
        $(".menu li a").click(function () {
            $(".menu li a").removeClass("active");
            $(this).addClass("active");
        });
    });
    
    // Parallax effect on background image
    $(window).on("scroll", function() {
        var scrollTop = $(this).scrollTop();
        $(".hero-background img").css('transform', 'translateY(' + -(scrollTop * 0.5) + 'px)');
    });
});

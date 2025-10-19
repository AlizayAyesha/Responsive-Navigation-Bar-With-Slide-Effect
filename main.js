$(document).ready(function () {
    // Toggle hamburger menu and slide toggle menu (mobile)
    $(".hamburger-menu").on('click', function () {
        var expanded = $(this).attr('aria-expanded') === 'true';
        $(this).attr('aria-expanded', !expanded);
        $(this).toggleClass("open");
        $(".menu").stop(true, true).slideToggle(200);
    });

    // Add an active class in <a> tag for menu items
    $(".menu li a").on('click', function () {
        $(".menu li a").removeClass("active");
        $(this).addClass("active");
        // close menu after selecting a link
        $(".hamburger-menu").removeClass('open').attr('aria-expanded', 'false');
        $(".menu").slideUp(150);
    });

    // Parallax effect on background image
    $(window).on("scroll", function() {
        var scrollTop = $(this).scrollTop();
        $(".hero-background img").css('transform', 'translateY(' + -(scrollTop * 0.5) + 'px)');
    });
});

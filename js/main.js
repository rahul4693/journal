$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $(".bg-light").addClass("fix")
        $(".bg-light").addClass("scroll-top-header-fix")
        $(".bg-light").addClass("scroll-top-header-border-fix")
    }
    else {
        $(".bg-light").removeClass("fix")
        $(".bg-light").removeClass("scroll-top-header-fix")
        $(".bg-light").removeClass("scroll-top-header-border-fix")
    }
})

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 4
            },
            600: {
                items: 5
            },
            1000: {
                items: 14
            }
        }
    })
});

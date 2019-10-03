$(window).on("load", function() {

    // WOW
    // new WOW({
    //     mobile: false
    // }).init(); 

    $(".top-button").click(function() {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 500);
    });

    // ─────────────── //
    //     SPINNER     //
    // ─────────────── //

    // hideSpinner();

    // Spinner hidding
    // function hideSpinner () {
    //     $("#preloader .spinner").fadeOut(500, function () {
    //         $("#preloader").delay(500).fadeOut(500);
    //         setTimeout(function () {
    //             $("body").css("overflow", "visible");
    //         }, 500);
    //     });
    // }

    // ────────────────── //
    //     TOP BUTTON     //
    // ────────────────── //

    showTopButton();

    $(document).scroll(function() {
        showTopButton();
    });

    // Top button revealing
    function showTopButton () {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)
            $(".top-button").css("opacity", "1");
        else
            $(".top-button").css("opacity", "0");
    }

});
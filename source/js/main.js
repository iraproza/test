;(function($, window, document, undefined) {
    'use strict';

    const $document = $(document),
        $window = $(window);

    $document.ready(function() {
        $document.on('click', '.burger', function (e) {
            $(this).toggleClass("is-active");
            $('.nav').toggleClass("is-active");
        })
    });

    $(window).on('resize', function() {

    });

    // return true if desktop with chosen size
    function desktopSize(size) {
        return $window.width() >= size;
    }

    // return true if obj exists
    function objLength(obj) {
        return obj.length;
    }

}($, window, document));

// end rating
;(function($, window, document, undefined) {
    'use strict';

    const $document = $(document),
        $window = $(window);

    $document.ready(function() {
        gsap.registerPlugin(ScrollTrigger);

        $document.on('click', '.burger', function (e) {
            $(this).toggleClass("is-active");
            $('.nav').toggleClass("is-active");
        })

        ScrollTrigger.addEventListener('scrollStart', function(){
            $('.layout').addClass('animation-out');
            setTimeout(()=>{
                $('.layout').addClass('animation-in');
            }, 500)

            AOS.init({
                duration: 1200
            });
        });

        gsap.fromTo(".banner__image-star", { x: '0px', y: '0px' }, {
            keyframes: [{
                x: '-24vw',
                y: '34vw',
                filter: 'blur(20px)',
                scale: '0.3',
                rotate: '0deg',
            }, {
                x: '-24vw',
                y: '34.1vw',
                filter: 'brightness(0) invert(1)',
                duration: 0.000001,
            }, {
                x: '-24.25vw',
                y: '40vw',
                scale: '0.17',
            }],
            scrollTrigger: {
                trigger: ".banner",
                toggleActions: "play pause resume",
                once: true,
                start: "top 100%",
                end: 'bottom bottom',
                scrub: 0,
            }
        });        
    });

}($, window, document));

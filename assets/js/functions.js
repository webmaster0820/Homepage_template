/*global jQuery */
/* Contents
// ------------------------------------------------>
	1.  LOADING SCREEN
	2.  BACKGROUND INSERT
	3.	NAV MODULE
	4.  MOBILE MENU
	5.  HEADER AFFIX
	6.  HEADER STATIC
	7.  COUNTER UP
	8.  COUNTDOWN DATE
	9.  AJAX MAILCHIMP
	10. AJAX CAMPAIGN MONITOR 
	11. OWL CAROUSEL
	12. MAGNIFIC POPUP
	13. MAGNIFIC POPUP VIDEO
	14. ROUNDED SKILL
	15. SWITCH GRID
	16. BACK TO TOP
	17. GALLERY FLITER
	18. SCROLL TO
	19. PROGRESS BAR
	20. WOW
	21. GOOGLE MAP
*/
(function($) {
    "use strict";
    /* ------------------  LOADING SCREEN ------------------ */

    $(window).on("load", function() {
        $(".preloader").fadeOut(5000);
        $(".preloader").remove();
    });

    /* ------------------  Background INSERT ------------------ */

    var $bgSection = $(".bg-section");
    var $bgPattern = $(".bg-pattern");
    var $colBg = $(".col-bg");

    $bgSection.each(function() {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("bg-section");
        $(this).remove();
    });

    $bgPattern.each(function() {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("bg-pattern");
        $(this).remove();
    });

    $colBg.each(function() {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("col-bg");
        $(this).remove();
    });

    /* ------------------  NAV MODULE  ------------------ */

    var $moduleIcon = $(".module-icon"),
        $moduleCancel = $(".module-cancel");
    $moduleIcon.on("click", function(e) {
        $(this).parent().siblings().removeClass('module-active'); // Remove the class .active form any sibiling.
        $(this).parent(".module").toggleClass("module-active"); //Add the class .active to parent .module for this element.
        e.stopPropagation();
    });
    // If Click on [ Search-cancel ] Link
    $moduleCancel.on("click", function(e) {
        $(".module").removeClass("module-active");
        e.stopPropagation();
    });

    $(".side-nav-icon").on("click", function() {
        if ($(this).parent().hasClass('module-active')) {
            //$(".module-hamburger > .hamburger-panel").css;
            $(".wrapper").addClass("hamburger-active");
            $(this).addClass("module-hamburger-close");
        } else {
            //$(".module-hamburger").width(0);
            $(".wrapper").removeClass("hamburger-active");
            $(this).removeClass("module-hamburger-close");
        }

    });
    // If Click on [ Document ] and this click outside [ hamburger panel ]
    $(document).on("click", function(e) {
        if ($(e.target).is(".hamburger-panel,.hamburger-panel .list-links,.hamburger-panel .list-links a,.hamburger-panel .social-share,.hamburger-panel .social-share a i,.hamburger-panel .social-share a,.hamburger-panel .copywright") === false) {
            $(".wrapper").removeClass("page-transform"); // Remove the class .active form .module when click on outside the div.
            $(".module-side-nav").removeClass("module-active");
            e.stopPropagation();
        }
    });

    // If Click on [ Document ] and this click outside [ module ]
    $(document).on("click", function(e) {
        if ($(e.target).is(".module, .module-content, .search-form input,.cart-control .btn,.cart-overview a.cancel,.cart-box") === false) {
            $module.removeClass("module-active"); // Remove the class .active form .module when click on outside the div.
            e.stopPropagation();
        }
    });

    /* ------------------  MOBILE MENU ------------------ */

    var $dropToggle = $("ul.dropdown-menu [data-toggle=dropdown]"),
        $module = $(".module");
    $dropToggle.on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().siblings().removeClass("open");
        $(this).parent().toggleClass("open");
    });

    $module.on("click", function() {
        $(this).toggleClass("toggle-module");
    });
    $module.find("input.form-control", ".btn", ".module-cancel").on("click",function(e) {
        e.stopPropagation();
    });

    /* ------------------ HEADER STATIC ------------------ */

    $(window).on("scroll", function() {
        var wScroll = $(window).scrollTop();
        var heroSlider = $('.rev_slider_wrapper').outerHeight();
        if (wScroll > heroSlider) {

            $('nav').parent('.onepage-header').addClass('navbar-fixed-top');

        } else {
            $('nav').parent('.onepage-header').removeClass('navbar-fixed-top');
        }

    });

    /* ------------------  COUNTER UP ------------------ */

    $(".counting").counterUp({
        delay: 10,
        time: 1000
    });

    /* ------------------ COUNTDOWN DATE ------------------ */

    $(".countdown").each(function() {
        var $countDown = $(this),
            countDate = $countDown.data("count-date"),
            newDate = new Date(countDate);
        $countDown.countdown({
            until: newDate,
            format: "MMMM Do , h:mm:ss a"
        });
    });

    /* ------------------  AJAX MAILCHIMP ------------------ */

    $('.mailchimp').ajaxChimp({
        url: "http://wplly.us5.list-manage.com/subscribe/post?u=91b69df995c1c90e1de2f6497&id=aa0f2ab5fa", //Replace with your own mailchimp Campaigns URL.
        callback: chimpCallback

    });

    function chimpCallback(resp) {
        if (resp.result === 'success') {
            $('.subscribe-alert').html('<div class="alert alert-success">' + resp.msg + '</div>').fadeIn(1000);
            //$('.subscribe-alert').delay(6000).fadeOut();

        } else if (resp.result === 'error') {
            $('.subscribe-alert').html('<div class="alert alert-danger">' + resp.msg + '</div>').fadeIn(1000);
        }
    }

    /* ------------------  AJAX CAMPAIGN MONITOR  ------------------ */

    $('#campaignmonitor').submit(function(e) {
        e.preventDefault();
        $.getJSON(
            this.action + "?callback=?",
            $(this).serialize(),
            function(data) {
                if (data.Status === 400) {
                    alert("Error: " + data.Message);
                } else { // 200
                    alert("Success: " + data.Message);
                }
            });
    });

    /* ------------------ OWL CAROUSEL ------------------ */

    $(".carousel").each(function() {
        var $Carousel = $(this);
        $Carousel.owlCarousel({
            loop: $Carousel.data('loop'),
            autoplay: $Carousel.data("autoplay"),
            margin: $Carousel.data('space'),
            nav: $Carousel.data('nav'),
            dots: $Carousel.data('dots'),
            center: $Carousel.data('center'),
            dotsSpeed: $Carousel.data('speed'),
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: $Carousel.data('slide-rs'),
                },
                1000: {
                    items: $Carousel.data('slide'),
                }
            }
        });
    });
    /* ------------------ MAGNIFIC POPUP ------------------ */

    var $imgPopup = $(".img-popup");
    $imgPopup.magnificPopup({
        type: "image"
    });
    $('.img-gallery-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    /* ------------------  MAGNIFIC POPUP VIDEO ------------------ */

    $('.popup-video,.popup-gmaps').magnificPopup({
        disableOn: 700,
        mainClass: 'mfp-fade',
        removalDelay: 0,
        preloader: false,
        fixedContentPos: false,
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src',
        }
    });

    /* ------------------  ROUNDED SKILL ------------------ */

    $(window).on("scroll", function() {
        var skill = $('.skill'),
            scrollTop = $(window).scrollTop(),
            windowHeight = $(window).height(),
            roundedSkill = $('.rounded-skill');
        if (roundedSkill.length) {
            var wScroll = scrollTop + windowHeight,
                skillScroll = skill.offset().top + skill.outerHeight();
            if (wScroll > skillScroll) {
                roundedSkill.each(function() {
                    $(this).easyPieChart({
                        duration: 1000,
                        enabled: true,
                        scaleColor: false,
                        size: $(this).attr('data-size'),
                        trackColor: false,
                        lineCap: $(this).attr('data-line'),
                        lineWidth: $(this).attr('data-width'),
                        barColor: $(this).attr('data-color'),
                        animate: 5000,
                        onStep: function(from, to, percent) {
                            $(this.el).find('.prcent').text(Math.round(percent));
                        }
                    });
                });
            }
        }
    });

    /* ------------------  BACK TO TOP ------------------ */

    var backTop = $('#back-to-top');

    if (backTop.length) {
        var scrollTrigger = 200, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    backTop.addClass('show');
                } else {
                    backTop.removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        backTop.on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    /* ------------------ gallery FLITER ------------------ */

    var $galleryFilter = $(".gallery-filter"),
        galleryLength = $galleryFilter.length,
        galleryFinder = $galleryFilter.find("a"),
        $galleryAll = $("#gallery-all");

    // init Isotope For gallery
    galleryFinder.on("click", function(e) {
        e.preventDefault();
        $galleryFilter.find("a.active-filter").removeClass("active-filter");
        $(this).addClass("active-filter");
    });
    if (galleryLength > 0) {
        $galleryAll.imagesLoaded().progress(function() {
            $galleryAll.isotope({
                filter: "*",
                animationOptions: {
                    duration: 750,
                    itemSelector: ".gallery-item",
                    easing: "linear",
                    queue: false,
                }
            });
        });
    }
    galleryFinder.on("click", function(e) {
        e.preventDefault();
        var $selector = $(this).attr("data-filter");
        $galleryAll.imagesLoaded().progress(function() {
            $galleryAll.isotope({
                filter: $selector,
                animationOptions: {
                    duration: 750,
                    itemSelector: ".gallery-item",
                    easing: "linear",
                    queue: false,
                }
            });
            return false;
        });
    });

    /* ------------------ Case FLITER ------------------ */

    var $caseFilter = $(".case-filter"),
        caseLength = $caseFilter.length,
        caseFinder = $caseFilter.find("a"),
        $caseAll = $("#case-all");

    // init Isotope For gallery
    caseFinder.on("click", function(e) {
        e.preventDefault();
        $caseFilter.find("a.active-filter").removeClass("active-filter");
        $(this).addClass("active-filter");
    });
    if (caseLength > 0) {
        $caseAll.imagesLoaded().progress(function() {
            $caseAll.isotope({
                filter: "*",
                animationOptions: {
                    duration: 750,
                    itemSelector: ".case-item",
                    easing: "linear",
                    queue: false,
                }
            });
        });
    }
    caseFinder.on("click", function(e) {
        e.preventDefault();
        var $selector = $(this).attr("data-filter");
        $caseAll.imagesLoaded().progress(function() {
            $caseAll.isotope({
                filter: $selector,
                animationOptions: {
                    duration: 750,
                    itemSelector: ".case-item",
                    easing: "linear",
                    queue: false,
                }
            });
            return false;
        });
    });

    /* ------------------  SCROLL TO ------------------ */

    var aScroll = $('a[data-scroll="scrollTo"]');
    aScroll.on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 1000);
            if ($(this).hasClass("menu-item")) {
                $(this).parent().addClass("active");
                $(this).parent().siblings().removeClass("active");
            }
        }
    });

    /* ------------------ PROGRESS BAR ------------------ */

    if ($(".skills").length > 0) {
        $(window).scroll(function() {
            var skillsTop = $(".skills").offset().top - 50,
                skillsHight = $(this).outerHeight(),
                wScroll = $(window).scrollTop();
            if (wScroll > skillsTop - 1 && wScroll < skillsTop + skillsHight - 1) {
                $(".progress-bar").each(function() {
                    $(this).width($(this).attr('aria-valuenow') + '%');
                });
            }
        });
    }

    if ($(".skills-scroll").length > 0) {
        $(".progress-bar").each(function() {
            $(this).width($(this).attr('aria-valuenow') + '%');
        });
    }

    /* ------------------ SLIDER RANGE ------------------ */

    var $sliderRange = $("#slider-range"),
        $sliderAmount = $("#amount");
    $sliderRange.slider({
        range: true,
        min: 0,
        max: 500,
        values: [50, 300],
        slide: function(event, ui) {
            $sliderAmount.val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $sliderAmount.val("$" + $sliderRange.slider("values", 0) + " - $" + $sliderRange.slider("values", 1));

    /* ------------------ Column Height ------------------ */

    $(window).on("load", function() {
        var comHeight = $(".comm-height"),
            comHeightOuter = comHeight.outerHeight(),
            colHeightContent = comHeight.children(".col-content").outerHeight();
        if (comHeight.length > 0) {
            if ($(window).width() > 991) {
                comHeight.each(function() {
                    $(this).children("[class*=col-]").css('height', comHeightOuter);
                });
            } else {
                comHeight.children("[class*=col-]").css('height', colHeightContent);
            }
        }
    });

    /* ------------------ WOW ------------------ */

    new WOW().init();

    /* ------------------ GOOGLE MAP ------------------ */

    $(".googleMap").each(function() {
        var $gmap = $(this);
        $gmap.gMap({
            address: $gmap.data('map-address'),
            zoom: $gmap.data('map-zoom'),
            maptype: $gmap.data('map-type'),
            markers: [{
                address: $gmap.data('map-address'),
                maptype: $gmap.data('map-type'),
                html: $gmap.data('map-info'),
                icon: {
                    image: $gmap.data('map-maker-icon'),
                    iconsize: [76, 61],
                    iconanchor: [76, 61]
                }
            }]
        });
    });

}(jQuery));
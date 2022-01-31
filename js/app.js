'use strict';

jQuery($ => {  

    //Responsive hamburger menu
    $(document).ready(function() {
        function burgerMenu(selector) {
            let menu = $(selector);
            let button = menu.find('.mobile-menu__button', '.mobile-menu__lines');
            let links = menu.find('.mobile-menu__link');
            let overlay = menu.find('.mobile-menu__overlay');

            button.on('click', (e) => {
                e.preventDefault();
                toggleMenu();
            });

            links.on('click', () => toggleMenu());
            overlay.on('click', () => toggleMenu());

            function toggleMenu(){
                menu.toggleClass('mobile-menu__active');

                if (menu.hasClass('mobile-menu__active')) {
                    $('body').css('overlow', 'hidden');
                } else {
                    $('body').css('overlow', 'visible');
                }
            }
        }

        burgerMenu('.mobile-menu');
    }); 

    $(document).ready(function () {
        var $status = $('.news__count');
        var $slickElement = $('.news__slider');
        $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.html('<span class="news__number">' + (((i) < 10) ? "0" + (i) : i) + '</span>' + ' / ' + (((slick.slideCount) < 10) ? "0" + (slick.slideCount) : slick.slideCount));
        });
        $slickElement.slick({
            arrows: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 0,
            adaptiveHeight: true,
            infinite: true,
            appendArrows: $('.news__button'),
            prevArrow: "<button class='news__prev'><svg class='news__icon' width='8' height='12' viewBox='0 0 8 12'><use xlink:href='img/arrow-left.svg#button-left'></use></svg></button>",
            nextArrow: "<button class='news__next'><svg class='news__icon' width='8' height='12' viewBox='0 0 8 12'><use xlink:href='img/arrow-right.svg#button-right'></use></svg></button>"
        });
    });


    $(document).ready(function () {
        $('.advantage__slider').slick({
            arrows: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            rows: 0,
            adaptiveHeight: true,
            infinite: true,
            responsive: [{
                breakpoint: 1605,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    });

    // Прокручивает страницу вверх при нажатии на кнопку
    $(window).scroll(function () {
        var height = $(window).scrollTop();

        if (height > 100) {
            $('.js-btn-top').fadeIn();
        } else {
            $('.js-btn-top').fadeOut();
        }
    });
    $(document).ready(function () {
        $(".js-btn-top").click(function (event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });
    });


});


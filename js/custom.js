$(document).ready(function(){
    //counter up
    $('.counter').counterUp({
        delay: 10,
        time: 5000,
    });

    //price slider
    $('.price-slider').slick({
        slidesToShow : 3,
        slideToScroll : 1,
        speed : 300,
        centerMode : true,
        centerPadding : '0px',
        autoplay : true,
        responsive : [{
            breakpoint : 576,
            settings : {
                slidesToShow : 1,
                slideToScroll : 1,
                arrows : false,
            }
        }]
      });

    //test peralax
    $('.parallax-window').parallax({imageSrc: 'images/test-back.png'});
    
});
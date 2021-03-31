$(function(){

    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow_left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow_right.svg" alt=""></button>',
        autoplay: 3000
    });

    $('.menu_btn').on('click', function(){
        $('.menu_list').toggleClass('menu_list-active')
    });
    

});

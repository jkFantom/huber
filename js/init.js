$(document).ready(function () {

  var div = document.createElement('div');

  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.visibility = 'hidden';

  document.body.appendChild(div);
  var scrollWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);

  $('[data-scrollbar-y=hidden]').css(
    'marginRight', -scrollWidth + 'px'
  )

  // !popup

  // $('.mobile-nav__item a').click(function() {
  //   $(this).parent().siblings().removeClass('active').find('ul').slideUp(200);
  //
  //   if ( $(this).next('ul').is(':hidden') ) {
  //     $(this).next('ul').slideDown(200).parent().addClass('active');
  //   } else {
  //     $(this).next('ul').slideUp(200).parent().removeClass('active');
  //   }
  //
  //   if ( $(this).siblings().length ) {
  //     return false;
  //   }
  // });
  //
  // $('.nav-trigger').click(function () {
  //   if ( $('.mobile-nav').hasClass('js--active') ) {
  //     $(this).removeClass('js--active');
  //     $('.mobile-nav').removeClass('js--active');
  //   }
  //   else {
  //     $(this).addClass('js--active');
  //     $('.mobile-nav').addClass('js--active');
  //   }
  // })
  //
  // $('.header-holder').parallax({
  //   parallax:'scroll',
  //   speed:'0.25',
  //   imageSrc:'/img/header-holder-bg.jpg'
  // });
  //
  // $('.quote-section').parallax({
  //   parallax:'scroll',
  //   speed:'0.2',
  //   imageSrc:'/img/quote-section-bg.jpg'
  // });
  //
  // $('.quote-section-2').parallax({
  //   parallax:'scroll',
  //   speed:'0.2',
  //   imageSrc:'/img/quote-section-bg2.jpg'
  // });
  //
  // // carousel
  //
  // $('.partners__list').slick({
  //   // autoplay: true,
  //   slidesToShow: 7,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 5
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2
  //       }
  //     },
  //     {
  //       breakpoint: 400,
  //       settings: {
  //         slidesToShow: 3
  //       }
  //     }
  //   ]
  // });

  // !carousel

  // wow plugin

  // var wow = new WOW({
  //     mobile: false
  // });
  //
  // wow.init();

  // !wow plugin

  // if ($(window).scrollTop() > 0) {
  //   $('.header').addClass('header_white');
  // }
  //
  // $(window).scroll(function() {
  //   if ($(window).scrollTop() > 0) {
  //     $('.header').addClass('header_white');
  //   } else {
  //     $('.header').removeClass('header_white');
  //   }
  // });

  $('.reviews__carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    draggable: true,
    vertical: true,
    infinite: true,
    speed: 600
  });
})

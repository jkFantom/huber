$(document).ready(function () {
  // slider-range

  $('#slider-range').slider({
    range: "min",
    min: 1,
    max: 20,
    value: 10,
    slide: function(event, ui) {
      $('#val1').val(ui.value);
    }
  });
  $('#val1').val( $('#slider-range').slider('value') );

  // !slider-range

  $('.reviews__carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    draggable: true,
    vertical: true,
    infinite: true,
    speed: 600
  });

  // mask

  $('[data-mask=phone]').mask("+7 (999) 999-99-99");

  // !mask

  // fancy

  $('.research__grid-link').fancybox({
    padding: 0,
    loop : false,
    width	: 'auto',
    height : 'auto',
    autoSize : false,
    nextEffect : 'elastic',
    prevEffect : 'elastic'
  });

  $('.offer__button').click(function() {
    $.fancybox.open($('[data-popup=success]'), {
      padding: 0,
      width: '400',
      height: 'auto',
      autoSize: false,
      openEffect: 'fade',
      closeEffect: 'fade'
    });
    return false;
  })

  // !fancy

  //tabs
  $('.rehab__tabs').each(function(){
    var indexTabsItem = $(this).find('.rehab__tabs-button_active').index();

    $(this).find('.rehab__video').eq(indexTabsItem).show();
  })

  $('.rehab__tabs-buttons').on('click', '.rehab__tabs-button:not(.active)', function() {
    $(this).addClass('active').siblings().removeClass('active')
      .parents('.rehab__tabs').find('.rehab__video').eq($(this).index())
      .fadeIn(150).siblings('.rehab__video').hide();
  })
  //!tabs
})

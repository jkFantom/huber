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

  $('[data-mask=phone]').mask("+7 (999) 999-99-99");
})

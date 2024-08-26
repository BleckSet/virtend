$('.slider.firts').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  draggable: true,
    infinite: true,
  vertical: true,
  centerMode: true,
  swipeToSlide: true,
  touchThreshold: 10,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 769, // При ширине экрана меньше или равной 769px
      settings: {
  swipe: true,

        autoplay: true,
        autoplaySpeed: 3000,
        vertical: false, // Отключение вертикального слайдера
        slidesToShow: 1, // Показываем один слайд
        centerMode: false,
        slidesToScroll: 1 // Прокручиваем один слайд
      }
    }
  ]
});

$('.slider.second').slick({
  slidesToShow: 3,
  infinite: true,

  slidesToScroll: 1,
  arrows: false,
  draggable: true,
  vertical: true,
  centerMode: true,
  focusOnSelect: true,
  swipeToSlide: true,
  touchThreshold: 10,
  responsive: [
    {
      breakpoint: 769, // При ширине экрана меньше или равной 769px
      settings: {
  swipe: true,

        autoplay: true,
        autoplaySpeed: 3500,
        centerMode:false,
        vertical: false, // Отключение вертикального слайдера
        slidesToShow: 1, // Показываем один слайд
        slidesToScroll: 1 // Прокручиваем один слайд
      }
    }
  ]
});





$('.slick-slide a').on('click', function(event) {
  // Проверяем, если родительский элемент не имеет класса `slick-current`
  if (!$(this).closest('.slick-slide').hasClass('slick-current')) {
    event.preventDefault(); // Отменяем стандартное действие ссылки
  }
});

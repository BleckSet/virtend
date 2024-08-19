$('.slider.firts').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  draggable: true,
  vertical: true,
  swipe: true,
  centerMode: true,
  swipeToSlide: true,
  touchThreshold: 10,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 769, // При ширине экрана меньше или равной 769px
      settings: {
        vertical: false, // Отключение вертикального слайдера
        slidesToShow: 1, // Показываем один слайд
        centerMode:false,
        slidesToScroll: 1 // Прокручиваем один слайд
      }
    }
  ]
});

$('.slider.second').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  draggable: true,
  vertical: true,
  centerMode: true,
  swipe: true,
  focusOnSelect: true,
  swipeToSlide: true,
  touchThreshold: 10,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 769, // При ширине экрана меньше или равной 769px
      settings: {
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

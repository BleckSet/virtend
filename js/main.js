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
  responsive: [
    {
      breakpoint: 769, // При ширине экрана меньше или равной 769px
      settings: {
        autoplay: true,
        autoplaySpeed: 300,
        vertical: false, // Отключение вертикального слайдера
        slidesToShow: 1, // Показываем один слайд
        centerMode: false,
        slidesToScroll: 1 // Прокручиваем один слайд
      }
    }
  ]
});
// Добавляем флаг для предотвращения многократной прокрутки
let isScrolling = false;

$('.slider.firts').on('wheel', function(e) {
  e.preventDefault();
  
  if (isScrolling) return;  // Прерываем выполнение, если уже идет прокрутка

  isScrolling = true;

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickPrev');
  } else {
    $(this).slick('slickNext');
  }

  // Устанавливаем тайм-аут для сброса флага, чтобы обработать следующее движение
  setTimeout(function() {
    isScrolling = false;
  }, 1500);  // Здесь можно изменить время в зависимости от нужной чувствительности
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
  responsive: [
    {
      breakpoint: 769, // При ширине экрана меньше или равной 769px
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode:false,
        vertical: false, // Отключение вертикального слайдера
        slidesToShow: 1, // Показываем один слайд
        slidesToScroll: 1 // Прокручиваем один слайд
      }
    }
  ]
});


$('.slider.second').on('wheel', function(e) {
  e.preventDefault();
  
  if (isScrolling) return;  // Прерываем выполнение, если уже идет прокрутка

  isScrolling = true;

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickPrev');
  } else {
    $(this).slick('slickNext');
  }

  // Устанавливаем тайм-аут для сброса флага, чтобы обработать следующее движение
  setTimeout(function() {
    isScrolling = false;
  }, 1500);  // Здесь можно изменить время в зависимости от нужной чувствительности
});


$('.slick-slide a').on('click', function(event) {
  // Проверяем, если родительский элемент не имеет класса `slick-current`
  if (!$(this).closest('.slick-slide').hasClass('slick-current')) {
    event.preventDefault(); // Отменяем стандартное действие ссылки
  }
});

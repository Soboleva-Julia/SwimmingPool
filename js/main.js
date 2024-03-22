const swiper = new Swiper('.swiper', {
    // Optional parameters
    // бесконечный слайдер
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: -150,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });
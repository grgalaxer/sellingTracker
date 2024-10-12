VanillaTilt.init(document.querySelectorAll(".tilt"), {
   max: 10, // Максимальный угол наклона
   speed: 4000, // Скорость анимации
   glare: false, // Включение эффекта блика
   // glare: true, это для бликов
   "max-glare": 0.5, 
});


const swiper = new Swiper('.swiper', {
   direction: 'vertical',
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});
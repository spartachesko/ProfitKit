const swiper2 = new Swiper('.swiper2', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  speed: 300,
  loop: true,
  navigation: {
    nextEl: '.swiper2-button-next',
    prevEl: '.swiper2-button-prev',
  },
  pagination: {
    el: '.swiper-pagination2',
    type: 'bullets',
    clickable: true
  },
});
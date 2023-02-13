const container = document.querySelector(".container");
const swiper = new Swiper('.products__card__swiper', {
	slidesPerView: 1,
	slidesPerGroup: 1,
  speed: 300,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
		clickable: true
  }
});
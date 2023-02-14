const swiper1 = new Swiper('.swiper1', {
	slidesPerView: 1,
	slidesPerGroup: 1,
  speed: 300,
  loop: true,
  navigation: {
    nextEl: '.swiper1-button-next',
    prevEl: '.swiper1-button-prev',
  },
	pagination: {
    el: '.swiper-pagination1',
    type: 'bullets',
		clickable: true
  },
});

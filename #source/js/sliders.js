//SLIDERS
if ($('.slider').length > 0) {
	$('.slider').slick({
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		easing: 'ease',
		infinite: true,
		// initialSlide: 1,
		autoplay: false,
		autoplaySpeed: 1000,
		pauseOnFocus: false,
		pauseOnHover: false,
		swipe: true,
		waitForAnimate: false,
		variableWidth: true,
		responsive: [{
			breakpoint: 425,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				centerMode: true,
			}
		}]
	});
};
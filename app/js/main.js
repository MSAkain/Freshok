$(function () {
	$('.top-slider__inner').slick({
		prevArrow: '<button type="button" class="slick-arrow arrow-right"><img src="images/icon/arrow-left.svg" alt="Стрелка влево"></button>',
		nextArrow: '<button type="button" class="slick-arrow arrow-left"><img src="images/icon/arrow-right.svg" alt="Стрелка влево"></button>'
	});


	var containerEl1 = document.querySelector('[data-ref="container-1"]');
	var containerEl2 = document.querySelector('[data-ref="container-2"]');

	var config = {
		controls: {
			scope: 'local'
		}
	};

	var mixer1 = mixitup(containerEl1, config);
	var mixer2 = mixitup(containerEl2, config);

});


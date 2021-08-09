$(function () {
	$('.top-slider__inner').slick({
		prevArrow: '<button type="button" class="slick-arrow arrow-right"><img src="images/icon/arrow-left.svg" alt="Стрелка влево"></button>',
		nextArrow: '<button type="button" class="slick-arrow arrow-left"><img src="images/icon/arrow-right.svg" alt="Стрелка влево"></button>',

		responsive: [
			{
				breakpoint: 1522,
				settings: {
					arrows: false,
					dots: true,
				}
			},
		]
	});

	$('.partners__list').slick({
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 3,

		responsive: [
			{
				breakpoint: 1322,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 880,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		]
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

	$('.header__users-search').on('click', function () {
		$('.form--mobile').toggleClass('form--active');
	});

	$('.menu__btn').click(function () {
		$('.menu-mobile').toggleClass('menu-mobile--active');
		$('.header__top').addClass('body--dark');
	});

	$('.menu-mobile__button').on('click', function () {
		$('.menu-mobile').removeClass('menu-mobile--active');
		$('.header__top').removeClass('body--dark');
	});

	$('.basket__close').on('click', function () {
		$('.header__basket').removeClass('basket--active');
		$('.benefits').removeClass('opacity');
	});

	$('.header__users-cart').on('click', function () {
		$('.header__basket').addClass('basket--active');
		$('.benefits').addClass('opacity');
	});

	$('input, select').styler();
});


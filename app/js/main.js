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
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 580,
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

	let btnSearch = $(".header__users-search");
	let formMobile = $(".form--mobile");

	$(document).mouseup(function (e) {
		if (!btnSearch.is(e.target) && btnSearch.has(e.target).length === 0 &&
			!formMobile.is(e.target) && formMobile.has(e.target).length === 0
		) {
			$('.form--mobile').removeClass('form--active');
		}
	});

	$('.menu__btn').click(function () {
		$('.mobile').toggleClass('mobile--active');
		$('.header__top').addClass('body--dark');
		$('body').addClass('hidden');
	});

	$('.mobile__button-close').on('click', function () {
		$('.mobile').removeClass('mobile--active');
		$('.header__top').removeClass('body--dark');
		$('body').removeClass('hidden');
	});

	$('.basket__close').on('click', function () {
		$('.header__basket').removeClass('basket--active');
		$('.benefits').removeClass('opacity');
		$('body').removeClass('hidden');
	});

	$('.header__users-cart').on('click', function () {
		$('.header__basket').addClass('basket--active');
		$('.benefits').addClass('opacity');
		$('body').addClass('hidden');
	});

	$('input, select').styler();

	let btnCart = $(".header__users-cart");
	let basket = $(".header__basket");

	$(document).mouseup(function (e) {
		if (!btnCart.is(e.target) && btnCart.has(e.target).length === 0 &&
			!basket.is(e.target) && basket.has(e.target).length === 0
		) {
			$('.header__basket').removeClass('basket--active');
			$('.benefits').removeClass('opacity');
			$('body').removeClass('hidden');
		}
	});

	let menuBtn = $(".menu__btn");
	let mobileMenu = $(".mobile");

	$(document).mouseup(function (e) {
		if (!menuBtn.is(e.target) && menuBtn.has(e.target).length === 0 &&
			!mobileMenu.is(e.target) && mobileMenu.has(e.target).length === 0
		) {
			$('.mobile').removeClass('mobile--active');
			$('.header__top').removeClass('body--dark');
			$('body').removeClass('hidden')
		}
	});

	$('.menu__button').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
	});

	let navBtn = $(".menu__button");
	let navList = $(".menu__list");

	$(document).mouseup(function (e) {
		if (!navBtn.is(e.target) && navBtn.has(e.target).length === 0 &&
			!navList.is(e.target) && navList.has(e.target).length === 0
		) {
			navList.removeClass('menu__list--active');
		}
	});
});


$(function () {

	let btnSearch = $(".header__users-search");
	let formMobile = $(".form--mobile");
	let btnCart = $(".header__users-cart");
	let basket = $(".header__basket");
	let menuBtn = $(".menu__btn");
	let mobileMenu = $(".mobile");
	let navBtn = $(".menu__button");
	let navList = $(".menu__list");
	let btnfilters = $('.catalog-content__open-filters');
	let filters = $('.catalog__filter-mobile');
	let sliderbtn = $('.product-page__img');
	let sliderPopup = $('.slider-popup__slider');
	var widthWind = $(this).width();

	$('.top-slider__inner').slick({
		prevArrow: '<button type="button" class="slick-arrow arrow-right"><svg width="20" height="32" viewBox="0 0 20 32" fill="none"><path d="M1.03821 17.0149L17.0515 31.6079C17.577 32.1307 18.4292 32.1307 18.9546 31.6079C19.4801 31.0851 19.4801 30.2369 18.9546 29.7141L3.9069 16L18.9533 2.2859C19.4788 1.76309 19.4788 0.914839 18.9533 0.392073C18.4278 -0.130695 17.5756 -0.130695 17.0502 0.392072L1.03687 14.9851C0.756805 15.2638 0.63673 15.6332 0.655437 15.9986C0.638023 16.3654 0.75806 16.7348 1.03821 17.0149Z" fill="#505050"/></svg></button>',
		nextArrow: '<button type="button" class="slick-arrow arrow-left"><svg width="20" height="32" viewBox="0 0 20 32" fill="none"><path d="M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z" fill="#505050"/></svg></button>',

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

	$('.product-page__slider').slick({
		prevArrow: '<button type="button" class="arrow pointer-right"><svg width="20" height="32" viewBox="0 0 20 32" fill="none"><path d="M1.03821 17.0149L17.0515 31.6079C17.577 32.1307 18.4292 32.1307 18.9546 31.6079C19.4801 31.0851 19.4801 30.2369 18.9546 29.7141L3.9069 16L18.9533 2.2859C19.4788 1.76309 19.4788 0.914839 18.9533 0.392073C18.4278 -0.130695 17.5756 -0.130695 17.0502 0.392072L1.03687 14.9851C0.756805 15.2638 0.63673 15.6332 0.655437 15.9986C0.638023 16.3654 0.75806 16.7348 1.03821 17.0149Z" fill="#505050"/></svg></button>',
		nextArrow: '<button type="button" class="arrow pointer-left"><svg width="20" height="32" viewBox="0 0 20 32" fill="none"><path d="M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z" fill="#505050"/></svg></button>',
	});

	$('.slider-popup__slider').slick({
		prevArrow: '<button type="button" class="arrow pointer-right"><svg width="20" height="32" viewBox="0 0 20 32" fill="none"><path d="M1.03821 17.0149L17.0515 31.6079C17.577 32.1307 18.4292 32.1307 18.9546 31.6079C19.4801 31.0851 19.4801 30.2369 18.9546 29.7141L3.9069 16L18.9533 2.2859C19.4788 1.76309 19.4788 0.914839 18.9533 0.392073C18.4278 -0.130695 17.5756 -0.130695 17.0502 0.392072L1.03687 14.9851C0.756805 15.2638 0.63673 15.6332 0.655437 15.9986C0.638023 16.3654 0.75806 16.7348 1.03821 17.0149Z" fill="#505050"/></svg></button>',
		nextArrow: '<button type="button" class="arrow pointer-left"><svg width="20" height="32" viewBox="0 0 20 32" fill="none"><path d="M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z" fill="#505050"/></svg></button>',
		dots: true,
	});

	$('.recent__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="arrow hand-right"><svg width="20" height="32" viewBox="0 0 20 32" fill="none"><path d="M1.03821 17.0149L17.0515 31.6079C17.577 32.1307 18.4292 32.1307 18.9546 31.6079C19.4801 31.0851 19.4801 30.2369 18.9546 29.7141L3.9069 16L18.9533 2.2859C19.4788 1.76309 19.4788 0.914839 18.9533 0.392073C18.4278 -0.130695 17.5756 -0.130695 17.0502 0.392072L1.03687 14.9851C0.756805 15.2638 0.63673 15.6332 0.655437 15.9986C0.638023 16.3654 0.75806 16.7348 1.03821 17.0149Z" fill="#505050"/></svg></button>',
		nextArrow: '<button type="button" class="arrow hand-left"><svg width="20" height="32" viewBox="0 0 20 32" fill="none"><path d="M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z" fill="#505050"/></svg></button>',
	});


	$('.product-card__input').styler();
	$('.product-page__input').styler();

	$('.catalog-content__name').select2({});

	$('.catalog-content__show').select2({});

	$('.filter-price__input').ionRangeSlider({
		type: "double",
		prefix: "₽",
		onStart: function (data) {
			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);
		},
		onChange: function (data) {
			$('.filter-price__from').text(data.from);
			$('.filter-price__to').text(data.to);
		},
	});

	AOS.init({
		disable: 'mobile'
	});



	$('.header__users-cart').on('click', function () {
		$('.header__basket').addClass('basket--active');
		$('.benefits').addClass('opacity');
		$('body').addClass('hidden');
	});

	$('.menu__btn').click(function () {
		$('.mobile').toggleClass('mobile--active');
		$('.header__top').addClass('body--dark');
		$('body').addClass('hidden');
	});


	$('.header__users-search').on('click', function () {
		$('.form--mobile').toggleClass('form--active');
	});

	$(document).mouseup(function (e) {
		if (!btnSearch.is(e.target) && btnSearch.has(e.target).length === 0 &&
			!formMobile.is(e.target) && formMobile.has(e.target).length === 0
		) {
			$('.form--mobile').removeClass('form--active');
		}
	});


	$('.mobile__button-close').on('click', function () {
		$('.mobile').removeClass('mobile--active');
		$('.header__top').removeClass('body--dark');
		$('body').removeClass('hidden');
	});

	$(document).mouseup(function (e) {
		if (!menuBtn.is(e.target) && menuBtn.has(e.target).length === 0 &&
			!mobileMenu.is(e.target) && mobileMenu.has(e.target).length === 0
		) {
			$('.mobile').removeClass('mobile--active');
			$('.header__top').removeClass('body--dark');
			$('body').removeClass('hidden')
		}
	});


	$('.basket__close').on('click', function () {
		$('.header__basket').removeClass('basket--active');
		$('.benefits').removeClass('opacity');
		$('body').removeClass('hidden');
	});

	$(document).mouseup(function (e) {
		if (!btnCart.is(e.target) && btnCart.has(e.target).length === 0 &&
			!basket.is(e.target) && basket.has(e.target).length === 0
		) {
			$('.header__basket').removeClass('basket--active');
			$('.benefits').removeClass('opacity');
			$('body').removeClass('hidden');
		}
	});


	$('.menu__button').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
	});

	$(document).mouseup(function (e) {
		if (!navBtn.is(e.target) && navBtn.has(e.target).length === 0 &&
			!navList.is(e.target) && navList.has(e.target).length === 0
		) {
			navList.removeClass('menu__list--active');
		}
	});




	$('.catalog-content__button--two-columns').on('click', function () {
		$('.catalog-content__list').addClass('two-columns');
		$('.product-card').addClass('product-card--small');
		$('.catalog-content__button--three-columns').removeClass('catalog-content__button--active');
		$('.catalog-content__button--two-columns').addClass('catalog-content__button--active');
	});

	$('.catalog-content__button--three-columns').on('click', function () {
		$('.catalog-content__list').removeClass('two-columns');
		$('.product-card').removeClass('product-card--small');
		$('.catalog-content__button--three-columns').addClass('catalog-content__button--active');
		$('.catalog-content__button--two-columns').removeClass('catalog-content__button--active');
	});

	$('.filter__top').on('click', function (e) {
		if ($('.catalog__filter').hasClass('one')) {
			$('.filter__top').not($(this)).removeClass('filter--active');
			$('.filter-form').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('filter--active').next().slideToggle(300);
	});

	$('.filter__title').on('click', function () {
		$(this).toggleClass('title--active');
	});

	$('.catalog-content__open-filters').on('click', function () {
		$('.catalog__filter-mobile').addClass('filter--mobile');
		$('.header__top').addClass('body--dark');
		$('body').addClass('hidden');
	});

	$('.catalog__filter-close').on('click', function () {
		$('.catalog__filter-mobile').removeClass('filter--mobile');

	});

	$(document).mouseup(function (e) {
		if (!btnfilters.is(e.target) && btnfilters.has(e.target).length === 0 &&
			!filters.is(e.target) && filters.has(e.target).length === 0
		) {
			$('.catalog__filter-mobile').removeClass('filter--mobile');
			$('.header__top').removeClass('body--dark');
			$('body').removeClass('hidden');
		}
	});

	if (widthWind <= 415) {
		$('.select2').attr('style', 'width: 158px');
	}

	if (widthWind <= 1023) {
		$('.catalog__filter-mobile').addClass('catalog__filter-mobile--close');
	}

	$('.product-page__img').on('click', function () {
		$('.slider-popup').fadeIn(800);
		$('html').addClass('hidden');
		$('.slider-popup').addClass('slider-popup--active');
	});

	$(document).mouseup(function (e) {
		if (!sliderbtn.is(e.target) && sliderbtn.has(e.target).length === 0 &&
			!sliderPopup.is(e.target) && sliderPopup.has(e.target).length === 0
		) {
			$('.slider-popup').removeClass('slider-popup--active');
			$('html').removeClass('hidden');
			$('.slider-popup').fadeOut(800);
		}
	});

	$('.slider-popup__close').on('click', function () {
		$('.slider-popup').fadeOut(800);
		$('html').removeClass('hidden');
		$('.slider-popup').removeClass('slider-popup--active');
	});

	$('.tabs__link').on('click', function (e) {
		e.preventDefault();

		$('.tabs__link').removeClass('tabs__link--active');
		$('.tabs__item').removeClass('tabs__item--active');

		$(this).addClass('tabs__link--active');
		$($(this).attr('href')).addClass('tabs__item--active');
	})


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


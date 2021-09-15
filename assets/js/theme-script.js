function handleTouchMove(ev) {
	if (!$(ev.target).closest('#header').length) {
		ev.preventDefault();
	}
}


var fnUpdateInformation = function (form) {
	// form == 0 : form cập nhật thông tin tài hoản
	// form == 1 : form đổi mật khẩu
	$('.template-1_information .card .loading-pure').show();
	setTimeout(function () {
		if (form == 0) {
			$('.template-1_information .card .card-header .template-1-heading h4').text('Cập nhật thông tin tài khoản');
			$('#informationView').hide();
			$('#informationFrom').show();
		} else if (form == 1) {
			$('.template-1_information .card .card-header .template-1-heading h4').text('Đổi mật khẩu');
			$('#informationView').hide();
			$('#passwordFrom').show();
		} else {
			$('.template-1_information .card .card-header .template-1-heading h4').text('Thông tin tài khoản');
			$('#informationFrom').hide();
			$('#passwordFrom').hide();
			$('#informationView').show();
		}
		$('.template-1_information .card .loading-pure').hide();
	}, 1000);
}

$(document).ready(function () {
	$(window).scroll(function () {
		var top = $(document).scrollTop();
		var height = 0;
		
		if (top > height) {
			$('.template-1-header').addClass('header-sticky');
		} else {
			$('.template-1-header').removeClass('header-sticky');
		}
	});
	
	let windowWidth = $(window).width();
	if (windowWidth < 992) {
		$(".template-1-header .navigation > ul > li > ul").each(function (index) {
			$(this).prev().attr({
				"href": "#subMenu" + index,
				"data-toggle": "collapse"
			});
			$(this).attr({
				"id": "subMenu" + index,
				"class": "collapse list-unstyled mb-0",
				"data-parent": "#hasMenu"
			});
		})
	}
	
	function callMenu() {
		if ($('body').hasClass('show-header-navigation')) {
			document.removeEventListener('touchmove', handleTouchMove);
			$('body').css('overflow', '').removeClass('show-header-navigation');
		} else {
			document.addEventListener('touchmove', handleTouchMove, {passive: false});
			$('body').css('overflow', 'hidden').addClass('show-header-navigation');
		}
	}
	
	$(document).on("click", "#callMenu, .header-overlay, #close-navigation", function () {
		callMenu();
	});
	
	const myBanner = new Swiper('#swiper-banner', {
		loop: true,
		spaceBetween: 50,
		speed: 250,
		effect: 'fade',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 1000000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return `<span class="${className}">${(index + 1) < 10 ? '0' + (index + 1) : (index + 1)}</span>`;
			},
		},
	});
	
	const myPartner = new Swiper('#swiper-partner', {
		slidesPerView: 5,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
		}
	});
	
	$('#form-expandCecharge .createRow').click(function () {
		html = `<div class="row">
									<div class="col-md-3 mb-3">
										<div class="form-group">
											<input type="text" class="form-control" id="phone" placeholder="0909xxxxxx">
										</div>
									</div>
									<div class="col-md-2 mb-3">
										<div class="form-group">
											<select class="form-control" id="network">
												<option name="viettel">Viettel</option>
												<option name="vinaphone">Vinaphone</option>
												<option name="mobile">Mobile</option>
												<option name="gate">Gate</option>
												<option name="zing">Zing</option>
											</select>
										</div>
									</div>
									<div class="col-md-2 mb-3">
										<div class="form-group">
											<select class="form-control" id="price">
												<option name="-1">--- Mệnh giá ---</option>
												<option name="10000">10.000 đ</option>
												<option name="20000">20.000 đ</option>
												<option name="30000">30.000 đ</option>
												<option name="50000">50.000 đ</option>
												<option name="100000">100.000 đ</option>
												<option name="200000">200.000 đ</option>
												<option name="300000">300.000 đ</option>
												<option name="500000">500.000 đ</option>
												<option name="1000000">1.000.000 đ</option>
											</select>
										</div>
									</div>
									<div class="col-md-2 mb-3">
										<div class="form-group">
											<input type="text" class="form-control" id="code" placeholder="">
										</div>
									</div>
									<div class="col-md-2 col-9 mb-3">
										<div class="form-group">
											<textarea class="form-control" id="mess" rows="1"></textarea>
										</div>
									</div>
									<div class="col-md-1 col-3 mb-3">
										<a href="javascript:void(0)"
										   class="deleteRow template-1-btn-circle ml-auto mt-33px rounded-circle btn btn-danger template-1-btn">
											<i class="fas fa-times"></i>
										</a>
									</div>
								</div>`;
		$('#form-expandCecharge').append(html)
	})
	
	$('#form-expandCart .createRow').click(function () {
		html = `<div class="row row-10 align-items-center">
									<div class="col-md-2 mb-3">
										<div class="form-group">
											<select class="form-control" id="network">
												<option name="viettel">Viettel</option>
												<option name="vinaphone">Vinaphone</option>
												<option name="mobile">Mobile</option>
												<option name="gate">Gate</option>
												<option name="zing">Zing</option>
											</select>
										</div>
									</div>
									<div class="col-md-3 mb-3">
										<div class="form-group">
											<input type="text" class="form-control" id="code" placeholder="">
										</div>
									</div>
									<div class="col-md-3 mb-3">
										<div class="form-group">
											<input type="text" class="form-control" id="seri" placeholder="">
										</div>
									</div>
									<div class="col-md-3 col-9 mb-3">
										<div class="form-group">
											<select class="form-control" id="price">
												<option name="-1">--- Mệnh giá ---</option>
												<option name="10000">10.000 đ</option>
												<option name="20000">20.000 đ</option>
												<option name="30000">30.000 đ</option>
												<option name="50000">50.000 đ</option>
												<option name="100000">100.000 đ</option>
												<option name="200000">200.000 đ</option>
												<option name="300000">300.000 đ</option>
												<option name="500000">500.000 đ</option>
												<option name="1000000">1.000.000 đ</option>
											</select>
										</div>
									</div>
									<div class="col-md-1 col-3 mb-3">
										<a href="javascript:void(0)"
										   class="deleteRow template-1-btn-circle ml-auto mb-3 rounded-circle btn btn-danger template-1-btn">
											<i class="fas fa-times"></i>
										</a>
									</div>
								</div>`;
		$('#form-expandCart').append(html)
	});
	
	$(document).on('click', '.deleteRow', function () {
		$(this).closest('.row').remove();
	});
	
	$('[data-toggle="tooltip"]').tooltip();
	
	const gameSlide = new Swiper('#swiper-games', {
		loop: true,
		speed: 1000,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		mousewheelControl: true,
		keyboardControl: true,
		slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return `<span class="${className}">${(index + 1) < 10 ? '0' + (index + 1) : (index + 1)}</span>`;
			},
		},
		autoplay: {
			delay: 100000,
			disableOnInteraction: false,
		},
		on: {
			progress() {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					var slideProgress = swiper.slides[i].progress;
					var innerOffset = swiper.width * 0.5;
					var innerTranslate = slideProgress * innerOffset;
					swiper.slides[i].querySelector(".slide-item").style.transform =
						"translate3d(" + innerTranslate + "px, 0, 0)";
				}
			},
			
			touchStart() {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = "";
				}
			},
			setTransition(templateBanner, speed) {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = speed + "ms";
					swiper.slides[i].querySelector(".slide-item").style.transition =
						speed + "ms";
				}
			}
		}
	});
	
	
	$('.updateInformation').click(function () {
		fnUpdateInformation($(this).data('form'));
	});
	
	$('[name=select-item_radio]').change(function (e) {
		let elm = $(this),
			price = $(this).attr('data-price'),
			credit = $(this).attr('data-credit'),
			percent = $(this).attr('data-percent'),
			priceDiscount = $(this).attr('data-pricediscount');
		// PC
		$('#totalPrice').html(price);
		$('#credit').html(credit);
		$('#discount').html(priceDiscount);
		$('#percent').html(percent);
		
		// Mobile
		$('#totalPricePopup').html(price);
		$('#creditPopup').html(credit);
		$('#discountPopup').html(priceDiscount);
		$('#percentPopup').html(percent);
	});
	
	$('.scrollPage').click(function () {
		$('body').animate({
			'scrollTop': $('#' + $(this).attr('data-id')).offset().top - 100
		}, 500)
	});
	
	const swiperReview = new Swiper('#swiper-review', {
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
		spaceBetween: 10,
		breakpoints: {
			320: {
				slidesPerView: 1.2,
			},
			600: {
				slidesPerView: 2.2,
			},
		}
	});
	
	$('#callPopupOrder, #closePopupOrder').click(function () {
		if ($('#popupOrder').hasClass('show')) {
			$('body').css('overflow', '');
			$('#popupOrder').removeClass('show');
		} else {
			$('body').css('overflow', 'hidden');
			$('#popupOrder').addClass('show');
		}
	});
});
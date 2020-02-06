$(function() {
	// wow js
	// new WOW().init();



	$('.how-work-list__item img').on('click', function(e) {
		$('.how-work-list__item img').removeClass('active');
		$(this).addClass('active');

		text = $(this).attr('data-text');


		$('.bag-list__left h2').hide('slow');
		$('.bag-list__left h2').show('slow', function() {
			$('.bag-list__left h2').text(text);
		});
	});




	// jQuery smooth scrolling
	$('.go_to1').click( function() { // ловим клик по ссылке с классом go_to1
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .

		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
		}

		return false; // выключаем стандартное действие
	});



	// onscroll
	window.onscroll = function() {
	  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	  // console.log(scrolled);

	  if(scrolled > 700) {
	    // $('.arrow').css('display', 'block');
	    $('.arrow').show('slow', function() {
	      //
	    });
	  }
	  else {
	    // $('.arrow').css('display', 'none');
	    $('.arrow').hide('slow', function() {
	      //
	    });
	  }
	}




	// slick slider-bag-list
	$('.slider-bag-list').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: true,
		dots: true,
		//swipe: false,
		//swipeToSlide: false,
		//touchMove: false,
		//accessibility: false,
		//centerMode: true,
		//centerPadding: '60px',
		autoplay: true,
		autoplaySpeed: 3000,

		// непрерывные слайды
		//cssEase: 'linear',
		//autoplay: true,
		//autoplaySpeed: 0,
		//speed: 3000,

		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"></button>',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				arrows: false,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			}
	  ]
	});




		// slick reviews-list
	$('.reviews-list').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: false,
		arrows: true,
		dots: false,
		//swipe: false,
		//swipeToSlide: false,
		//touchMove: false,
		//accessibility: false,
		//centerMode: true,
		//centerPadding: '60px',
		autoplay: true,
		autoplaySpeed: 3000,

		// непрерывные слайды
		//cssEase: 'linear',
		//autoplay: true,
		//autoplaySpeed: 0,
		//speed: 3000,

		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"></button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"></button>',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: true,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 575,
			  settings: {
				arrows: false,
				//centerMode: true,
				//centerPadding: '40px',
				slidesToShow: 1
			  }
			}
	  ]
	});





	// popup
	// ставим на кнопку которая вызывает данный popup
	$('.js-popup').on('click', function(e) {
	  e.preventDefault();

	  $('.popup').slideDown(600);

	  $('.popup-overlay').fadeIn('slow');
	  // $('.popup-overlay').css('display', 'block');

	  // поиск button close2 popup
	  $('.js-close2-popup, .popup-overlay').on('click', function(e) {
	  	e.preventDefault();

			$('.popup').slideUp(600, function() {

			});

			$('.popup-overlay').fadeOut('slow');
			
	  });
	});



	// $('.js-popup2').on('click', function(e) {
	//   e.preventDefault();

	// 	// fix popup background to scroll
	// 	$('body').addClass('no-scroll');
  // body.no-scroll {
	//   overflow: hidden;
	//   position: fixed;
	// }

	//   // в input hidden помещаем значение button в data-user - когда нужно передать значение из button
	//   // <button class="btnbig js-popup" data-user="узнать о программе - блок: ДИСТАНЦИОННАЯ ПРОГРАММА">узнать о программе</button>
	//   // $('.popup2 .main-form input[name="user_data"]').val($(this).attr('data-user'));

	//   // поиск popup и popup-overlay для их открытия
	//   // $('.popup').css('display', 'block');
	//   // $('.popup-overlay').css('display', 'block');
	//   // or
	//   $('.popup2').slideDown();
	//   $('.popup-overlay').css('display', 'block');

	//   // поиск button close2 popup
	//   $('.js-close2-popup, .popup-overlay').on('click', function(e) {
	// 			e.preventDefault();

	// 			// upfix popup background to scroll
	//   		$('body').removeClass('no-scroll');

	// 		// $('.popup').css('display', 'none');
	// 		// $('.popup-overlay').css('display', 'none');
	// 		// or
	// 		$('.popup2').slideUp();
	// 		$('.popup-overlay').css('display', 'none');

	// 		// для wp cf7
	// 		// $("form").trigger("reset");
	// 		// $("form .wpcf7-not-valid-tip").hide();
	// 		// $("form .wpcf7-response-output.wpcf7-display-none.wpcf7-validation-errors").hide();
	//   });
	// });




	// email
	$('.main-form').submit(function(event) {
		event.preventDefault();

		

		// $.ajax({
		// 	type: "POST",
		// 	url: "smart.php",	// url: "smart.php", даже если js и php не в одной папке!
		// 	data: $(this).serialize()
		// }).done(function(data) {
		// 	$(this).find("input").val("");

		// 	$("form").trigger("reset");

		// 	$('.popup').slideUp();
		// 	$('.popup-overlay').css('display', 'none');

		// 	//alert("Заявка отправлена!");
		// 	window.location.href = "thanks.html";
		// });

		return false;
	});

});
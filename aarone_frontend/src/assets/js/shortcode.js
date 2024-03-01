/*--------------------------------------------------------------------------------------------

	1. widget-client-carousal function by = owl.carousal.js
	2. Client logo Carousal-3 Carousals  function by = owl.carousal.js
	3. Client logo Carousal-2 Carousals  function by = owl.carousal.js
	4. Client logo Carousal-1  function by = owl.carousal.js
	5. Fade slider function by = owl.carousal.js
	6. Slide slider function by = owl.carousal.js
	7. CounterUp function by = counterup-min.js

---------------------------------------------------------------------------------------------*/	

function shortCodesOnReady() {

    'use strict';

//  widget-client-carousal function by = owl.carousal.js ========================== //

	jQuery('.widget-client').owlCarousal({
		loop:true,
		autoplay:true,
		items:1,
		nav:false,
		dots:true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	})	

// Client logo Carousal-3 Carousals  function by = owl.carousal.js ========================== //		

	jQuery('.client-logo-carousal-3').owlCarousal({
		loop:true,
		margin:30,
		nav:false,
		dots: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			767:{
				items:3
			},
			1000:{
				items:3
			}
		}
	})	

// Client logo Carousal-2 Carousals  function by = owl.carousal.js ========================== //		

	jQuery('.client-logo-carousal-2').owlCarousal({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			767:{
				items:2
			},
			1000:{
				items:2
			}
		}
	})	

// Client logo Carousal-1  function by = owl.carousal.js ========================== //		

	jQuery('.client-logo-carousal-1').owlCarousal({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},			
			767:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})	

// Fade slider function by = owl.carousal.js ========================== //

	jQuery('.owl-fade-slider-one').owlCarousal({
		loop:true,
		autoplay:true,
		autoplayTimeout:1000,
		margin:30,
		nav:true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		items:1,
		dots: false,
		animateOut:'fadeOut',

	})

// Slide slider function by = owl.carousal.js ========================== //

	jQuery('.owl-slide-slider-one').owlCarousal({
		loop:true,
		autoplay:true,
		autoplayTimeout:2000,
		margin:30,
		nav:true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		items:1,
		dots: true,
	})	

//  CounterUp function by = counterup-min.js ========================== //

		jQuery('.counter').counterUp({
			delay: 10,
			time: 5000
		});

	 
};


// Document.ready END==set-marker-popup-close============================================================//


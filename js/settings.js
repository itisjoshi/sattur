//  ====================================================================
//	Theme Name: Warner - Multi-purpose Bootstrap Template
//	Theme URI: http://themeforest.net/user/responsiveexperts
//	Description: This javascript file is using as a settings file. This file includes the sub scripts for the javascripts used in this template.
//	Version: 1.0
//	Author: ctrlthreads
//	Author URI: http://themeforest.net/user/responsiveexperts
//	Tags:
//  ====================================================================

//	TABLE OF CONTENTS
//	---------------------------
//	 01. Preloader
//	 02. Flexslider
//   03. Portfolio-filter
//   04. Scroll To Top
//	 05. Adding fixed position to header
//	 06. Menu Toggle
//	 07. Animations
//	 08. PopUp

//  ====================================================================


(function() {
	"use strict";
	$(window).load(function() {
	// -------------------- 01. Preloader ---------------------
	// --------------------------------------------------------
		$("#loader").fadeOut();
		$("#mask").delay(1000).fadeOut("slow");
	// ------------------- 02. Flexslider ------------------
	// --------------------------------------------------------
		$('#banner-slider').flexslider({
			animation: "fade",
			controlNav: true,
			slideshowSpeed:5000,
			animationSpeed:1000,
			directionNav: true
		});
		$('#testimonial-slider').flexslider({
			animation: "scroll",
			controlNav: true,
			slideshowSpeed:5000,
			animationSpeed:500,
			directionNav: true
		});
	// -------------------- 03. Portfolio-filter --------------------
	// --------------------------------------------------------
	var $container = $('.portfolioContainer');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
	 $('.portfolioFilter a').on('click',function(){
			$('.portfolioFilter .current').removeClass('current');
			$(this).addClass('current');
	 
			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			 });
			 return false;
		}); 
	});
	// ------------------- 04. Scroll To Top ------------------
	// --------------------------------------------------------
		$(document).on("scroll", onScroll);
		$('a[href*=#]:not([href=#])').on("click",function() {
			$('.menu-main li').removeClass('active');
			$(this).parent().addClass('active');
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
	
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
			
		});
	// --------- 05. Adding fixed position to header ---------- 
	// --------------------------------------------------------
	function onScroll(event){
		var scrollPos = $(document).scrollTop();
		if (scrollPos >= 1) {
		  $('.header-area').addClass('navbar-fixed-top');
		} else {
		  $('.header-area').removeClass('navbar-fixed-top');
		}
		$('.menu-main li a[href*=#]:not([href=#])').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$('.menu-main li').removeClass("active");
				currLink.parent().addClass("active");
			}
			else{
				currLink.parent().removeClass("active");
			}
		});
	}
	// -------------------- 06. Menu Toggle -------------------
	// --------------------------------------------------------
    $( ".togg-navi" ).on('click',function() {
		$( ".menu-main" ).toggle();
	});
	// -------------------- 07. Animations --------------------
	// --------------------------------------------------------

	$('.animated').appear(function() {
		var elem = $(this);
		var animation = elem.data('animation');
		if ( !elem.hasClass('visible') ) {
			var animationDelay = elem.data('animation-delay');
			if ( animationDelay ) {
				setTimeout(function(){
					elem.addClass( animation + " visible" );
				}, animationDelay);
			} else {
				elem.addClass( animation + " visible" );
			}
		}
	});
	// -------------------- 08. pop up --------------------
	// --------------------------------------------------------
        if ($(".overlay-sec-green")[0]){
		$('.overlay-sec-green').magnificPopup({
          delegate: '.srch',
          type: 'image',
          tLoading: 'Loading image',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
             // return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
          }
        });	
		}
})(jQuery);



;(function($){

	'use strict';

	$(function(){

		document.addEventListener("touchstart", function() {},false);

		if ('ontouchstart' in document.documentElement) {
			$('body').css('cursor', 'pointer');
		}

		/* ------------------------------------------------
		Popup
		------------------------------------------------ */

		var popup_item = $("#popup");

		if(popup_item.length){

			popup_item.fadeOut();

		    $(document).mouseup(function (e) {

			    var container = $(".case-popup");
			    if (container.has(e.target).length == 0){
			        container.fadeOut("slow");
			    }

			});

			$('.open-popup').on('click', function() {
		      popup_item.fadeIn("slow");
		      return false;
		    });

		    $('.close-popup').on('click', function() {
		      popup_item.fadeOut("slow");
		    });

		}

		/* ---------------------------------------------------- */
		/*	Items equal height									*/
		/* ---------------------------------------------------- */

		$(window).on('load resize',function() {
			
			//set the starting bigestHeight variable  
		    var biggestHeight = 0;  
		    //check each of them  
		    $('.eq-height .service-item').each(function(){  
		        //if the height of the current element is  
		        //bigger then the current biggestHeight value  
		        if($(this).height() > biggestHeight){  
		            //update the biggestHeight with the  
		            //height of the current elements  
		            biggestHeight = $(this).height();  
		        }  
		    });  
		    //when checking for biggestHeight is done set that  
		    //height to all the elements  
		    $('.eq-height .service-item').height(biggestHeight); 
		    
		});
		
		if ($('.two-cols').length) {

	    	$(window).on('load resize',function() {

	    		if ($(window).width() < 992) {

	    			var setHeightLeft = $(".left-col").outerHeight();

					var setHeightRight = $(".right-col").outerHeight();

					$(".left-bg").height(setHeightLeft);

					$(".right-bg").height(setHeightRight);

					var setHeightLeft2 = $(".left-col-2").outerHeight();

					var setHeightRight2 = $(".right-col-2").outerHeight();

					$(".left-bg-2").height(setHeightLeft2);

					$(".right-bg-2").height(setHeightRight2);
					
	    		}
	
			});

	    }
		
		/* ---------------------------------------------------- */
		/*	Countdown											*/
		/* ---------------------------------------------------- */

		$('.countdown').each(function(){
			var $this = $(this),
				endDate = $this.data(),
				until = new Date(
					endDate.year,
					endDate.month || 0,
					endDate.day || 1,
					endDate.hours || 0,
					endDate.minutes || 0,
					endDate.seconds || 0
				);
			// initialize
			$this.countdown({
				until : until,
				format : 'dHMS',
				labels : ['years', 'month', 'weeks', 'days', 'hours', 'minutes', 'seconds']
			});
		});

		/* ---------------------------------------------------- */
		/*	Toggle list											*/
		/* ---------------------------------------------------- */

		if ($('.toggle-list').length) {

	    	$( ".toggle-btn" ).on('click',function() {
	    		$(this).toggleClass('toggle');

			  	$(this).next().slideToggle( "slow", function() {
			    	// Animation complete.
			  	});
			});

	    }

		/* ---------------------------------------------------- */
		/*	Background size screen								*/
		/* ---------------------------------------------------- */

	    if ($('.full-scr').length) {

	    	$('.toggle-btn').on('click',function(){
		        $('.full-scr').css('height', window.innerHeight+'px');
		    });

	    }

	    /* ---------------------------------------------------- */
		/*	Revolution slider									*/
		/* ---------------------------------------------------- */

	    if ($('#header').hasClass('fixed-header')) {

	    	if ($('#rev-slider').length) {
				jQuery("#rev-slider").revolution({
		            sliderType:"standard",
			    	spinner: "spinner3",
					shuffle:"off",
					autoHeight:"off",
					hideThumbsOnMobile:"off",
					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
			    	delay:6000,
			    	sliderLayout:"fullscreen",
		            navigation: {
		                bullets:{
				        	style:"",
				        	enable: true,
				        	container: "slider",
				        	hide_onmobile: false,
				        	hide_onleave: false,
				        	hide_delay: 200,
				        	hide_under: 0,
				        	hide_over: 9999,
				        	tmp:'<span class="circle-bullet"></span>', 
				        	direction:"vertical",
				        	space: 5,       
				        	h_align: "right",
				        	v_align: "center",
				        	h_offset: 40
				        }
		            },
		            visibilityLevels:[1370,1240,1024],
		            responsiveLevels:[1370,1180],
					gridwidth:[1370,1240,1024],
		        });

		    }

		}

		else if ($('#header').hasClass('style-2')){

			if ($('#rev-slider').length) {
				jQuery("#rev-slider").revolution({
		            sliderType:"standard",
			    	spinner: "spinner3",
					shuffle:"off",
					autoHeight:"off",
					hideThumbsOnMobile:"off",
					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
			    	delay:6000,
		            navigation: {
		                bullets:{
				        	style:"",
				        	enable: true,
				        	container: "slider",
				        	hide_onmobile: false,
				        	hide_onleave: false,
				        	hide_delay: 200,
				        	hide_under: 0,
				        	hide_over: 9999,
				        	direction:"vertical",
				        	space: 5,       
				        	h_align: "right",
				        	v_align: "center",
				        	h_offset: 40,
				        	v_offset: 0
				        }
		            },
		            responsiveLevels:[1200],
					gridwidth:[1200],
		            gridheight:900
		        });

		    }

		}

		else if ($('#header').hasClass('style-3')){

			if ($('#rev-slider').length) {
				jQuery("#rev-slider").revolution({
		            sliderType:"standard",
			    	spinner: "spinner3",
					shuffle:"off",
					autoHeight:"off",
					hideThumbsOnMobile:"off",
					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
			    	delay:6000,
		            navigation: {
		                bullets:{
				        	style:"",
				        	enable: true,
				        	container: "slider",
				        	hide_onmobile: false,
				        	hide_onleave: false,
				        	hide_delay: 200,
				        	hide_under: 0,
				        	hide_over: 9999,
				        	direction:"vertical",
				        	space: 5,       
				        	h_align: "right",
				        	v_align: "center",
				        	h_offset: 40,
				        	v_offset: 0
				        }
		            },
		            responsiveLevels:[1330,1240],
					visibilityLevels:[1330,1240],
					gridwidth:[1330,1240],
		            gridheight:805
		        });

		    }

		}

	    /* ---------------------------------------------------- */
        /*	Isotope												*/
        /* ---------------------------------------------------- */

		$( window ).on('load', function() {

		  	var $container = $('.isotope');
		    // filter buttons
		    $('#filters button').on('click', function(){
		    	var $this = $(this);
		        // don't proceed if already selected
		        if ( !$this.hasClass('is-checked') ) {
		          $this.parents('#options').find('.is-checked').removeClass('is-checked');
		          $this.addClass('is-checked');
		        }
				var selector = $this.attr('data-filter');
				$container.isotope({  itemSelector: '.item', filter: selector });
				return false;
		    });

		    $.mad_core.isotope();
		     
		});

		/* ---------------------------------------------------- */
        /*	Gallery carousel									*/
        /* ---------------------------------------------------- */

	  	var pageCarousel = $('.owl-carousel');

		if(pageCarousel.length){

			$('.owl-carousel').not('#thumbnails').each(function(){
	
				/* Max items counting */
				var max_items = $(this).data('max-items');
				var tablet_items = max_items;
				if(max_items > 1){
					tablet_items = max_items - 1;
				}
				var smart_items = max_items;
				if(max_items > 3){
					smart_items = max_items - 2;
				}else{
					smart_items = max_items - 1;
				}
				var mobile_items = 1;

				var autoplay_carousel = $(this).data('autoplay');

				var center_carousel = $(this).data('center');

				var item_margin = $(this).data('item-margin');
				
				/* Install Owl Carousel */
				$(this).owlCarousel({
				    smartSpeed : 450,
				    nav : true,
				    loop  : true,
				    autoplay : autoplay_carousel,
				    center: center_carousel,
				    autoplayTimeout: 3000,
				    navText : false,
				    margin: item_margin,
				    lazyLoad: true,
				    rtl: $.mad_core.SUPPORT.ISRTL ? true : false,
				    responsiveClass:true,
				    responsive : {
				        0:{
				            items:mobile_items
				        },
				        480:{
				        	items:smart_items
				        },
				        769:{
				            items:tablet_items
				        },
				        992:{
				            items:max_items
				        }
				    }
				});


			});

			$('.custom-owl-prev').on('click',function(){

				$('.owl-carousel').trigger('prev.owl.carousel');

				return false;

			});

			$('.custom-owl-next').on('click',function(){

				$('.owl-carousel').trigger('next.owl.carousel');

				return false;

			});

			if($('#thumbnails').length){
				$('#thumbnails').each(function(){
					
					/* Max items counting */
					var data = $(this).data();
					var max_items = $(this).data('max-items');
					var tablet_items = max_items;
					if(max_items > 1){
						tablet_items = max_items - 1;
					}
					var mobile_items = 1;

					var autoplay_carousel = $(this).data('autoplay');
					
					$(this).owlCarousel({
						items : max_items,
						URLhashListener : false,
						navSpeed : 800,
						nav : false,
						loop : false,
						rtl: $.mad_core.SUPPORT.ISRTL ? true : false,
						navText:false,
						responsive : {
					        0:{
					            items:tablet_items
					        },
					        481:{
					            items:max_items
					        },
					        1200:{
					            items:max_items
					        }
					    }
				    });
				});
			    
			}
		}

		/* ---------------------------------------------------- */
        /*	Custom Select										*/
        /* ---------------------------------------------------- */

		if ($('.custom-select').length) {
			$('.custom-select').madCustomSelect();
		}

		/* ---------------------------------------------------- */
        /*	Tabs												*/
        /* ---------------------------------------------------- */

        $(window).on("load",function(){

        	var tabs = $('.tabs-section');
			if(tabs.length){
				tabs.tabs({
					beforeActivate: function(event, ui) {
				        var hash = ui.newTab.children("li a").attr("href");
				   	},
					hide : {
						effect : "fadeOut",
						duration : 450
					},
					show : {
						effect : "fadeIn",
						duration : 450
					},
					updateHash : false
				});
			}

        });

		/* ---------------------------------------------------- */
        /*	Newsletter											*/
        /* ---------------------------------------------------- */

	    var subscribe = $('[id^="newsletter"]');
	      subscribe.append('<div class="message-container-subscribe"></div>');
	      var message = $('.message-container-subscribe'),text;

	      subscribe.on('submit',function(e){
	        var self = $(this);
	        
	        if(self.find('input[type="email"]').val() == ''){
	          text = "Please enter your e-mail!";
	          message.html('<div class="alert-warning"><p>'+text+'</p></div>')
	            .slideDown()
	            .delay(4000)
	            .slideUp(function(){
	              $(this).html("");
	            });

	        }else{
	          self.find('span.error').hide();
	          $.ajax({
	            type: "POST",
	            url: "bat/newsletter.php",
	            data: self.serialize(), 
	            success: function(data){
	              if(data == '1'){
	                text = "Your email has been sent successfully!";
	                message.html('<div class="alert-success"><p>'+text+'</p></div>')
	                  .slideDown()
	                  .delay(4000)
	                  .slideUp(function(){
	                    $(this).html("");
	                  })
	                  .prevAll('input[type="email"]').val("");
	              }else{
	                text = "Invalid email address!";
	                message.html('<div class="alert-error"><p>'+text+'</p></div>')
	                  .slideDown()
	                  .delay(4000)
	                  .slideUp(function(){
	                    $(this).html("");
	                  });
	              }
	            }
	          });
	        }
	        e.preventDefault();
	    });

		/* ---------------------------------------------------- */
        /*	Loader												*/
        /* ---------------------------------------------------- */

		if($('.loader').length){

        	$("body").queryLoader2({
		        backgroundColor: '#fff',
		        barColor : '#d46703',
		        barHeight: 4,
		        deepSearch:true,
		        minimumTime:1000,
		        onComplete: function(){
		        	$(".loader").fadeOut('200');
		        }
	      	});

        }

		/* ---------------------------------------------------- */
        /*	Sticky menu											*/
        /* ---------------------------------------------------- */

		$('body').Temp({
			sticky: true
		});

		/* ------------------------------------------------
		Instagram Feed
		------------------------------------------------ */

	    if($('.instagram-feed').length){

	    	$('#instafeed').each(function(){

	    		var insta_items = $(this).data('instagram');

	    		var feed = new Instafeed({
			      target: 'instafeed',
			      tagName: 'living',
			      limit: insta_items,
			      get: 'user',
			      userId: 6827739053,
			      accessToken: '6827739053.1677ed0.3305a4ede95243f29c23015a917c964a',
			      resolution: 'standard_resolution',
			      clientId: 'a2ee6e79510348bba9653ae477710887',
			      template: '<li class="nv-instafeed-item"><a class="fancybox nv-lightbox" data-fancybox="instagram" href="{{image}}" title="{{location}}"><img src="{{image}}" /></a></li>',
			      after: function(){
			       $('#' + this.options.target).find('.fancybox').fancybox();
			      }
			    });
			      
			    feed.run();

	    	});

	    }

	    /* ------------------------------------------------
		Twitter Feed
		------------------------------------------------ */

	    if($("#twitter").length){

    		$('#twitter').tweet({

			    modpath: 'plugins/twitter/',
			    username: "velikorodnov",
			    count: 3,
			    loading_text: 'loading twitter feed...'
			    /* etc... */

			});

			$('.tweet_list > li').append('<div class="flex-row flex-justify flex-center"><div class="entry-meta"><time class="entry-date" datetime="2018-03-25">March 25, 2018</time></div><div class="slash-list"><a href="#">Retweet</a> | <a href="#">Favorite</a></div></div>');

		}
		
		/* ---------------------------------------------------- */
        /*	Price Scale										    */
        /* ---------------------------------------------------- */

		var slider;
		if($('#price').length){
			slider = $('#price').slider({ 
		 		animate: true,
				range: true,
				values: [ 20, 400 ],
				min: 0,
				max: 500,
				slide : function(event ,ui){
					$('.range-values').find('.first-limit').val('$' + ui.values[0]);
					$('.range-values').find('.last-limit').val('$' + ui.values[1]);
				}
			});
		}
		if($('#distance').length){
			slider = $( "#distance" ).slider({
				animate: true,
			    value: 0,
			    min: 0,
			    max: 1000,
			    step: 1,
			    slide: function( event, ui ) {
			       $( "#amount" ).val(  ui.value + " km" );
			       $( "#total" ).val(  "Total: $ " + ui.value );
			    }
		    });
		    $( "#amount" ).val( $( "#distance" ).slider( "value" ) + " km" );
		    $( "#total" ).val( "Total: $ " +  $( "#distance" ).slider( "value" ) );
		}
		

		/* ---------------------------------------------------- */
        /*	Accordion & Toggle									*/
        /* ---------------------------------------------------- */

		var aItem = $('.accordion:not(.toggle) .accordion-item'),
			link = aItem.find('.a-title'),
			$label = aItem.find('label'),
			aToggleItem = $('.accordion.toggle .accordion-item'),
			tLink = aToggleItem.find('.a-title');

			aItem.add(aToggleItem).children('.a-title').not('.active').next().hide();

		function triggerAccordeon($item) {
			$item
			.addClass('active')
			.next().stop().slideDown()
			.parent().siblings()
			.children('.a-title')
			.removeClass('active')
			.next().stop().slideUp();
		}


		if ($label.length) {
			$label.on('click',function(){
				triggerAccordeon($(this).closest('.a-title'))
			});
		} else {
			link.on('click',function(){
				triggerAccordeon($(this))
			});
		}

		tLink.on('click',function(){
			$(this).toggleClass('active')
			.next().stop().slideToggle();

		});

		/* ---------------------------------------------------- */
        /*	Quantity											*/
        /* ---------------------------------------------------- */

		var q = $('.quantity');

		q.each(function(){
			var $this = $(this),
				button = $this.children('button'),
				input = $this.children('input[type="text"]'),
				val = +input.val();

			button.on('click',function(){
				if($(this).hasClass('qty-minus')){
					if(val === 1) return false;
					input.val(--val);
				}
				else{
					input.val(++val);
				}
			});
		});

		/* ---------------------------------------------------- */
        /*	Contact Form										*/
        /* ---------------------------------------------------- */

		if ($('#contact-form').length){

			var cf = $('#contact-form');
			cf.append('<div class="message-container"></div>');

			cf.on("submit",function(event){

				var self = $(this),text;

				var request = $.ajax({
					url:"bat/mail.php",
					type : "post",
					data : self.serialize()
				});

				request.then(function(data){
					if(data == "1"){

						text = "Your message has been sent successfully!";

						cf.find('input:not([type="submit"]),textarea').val('');

						$('.message-container').html('<div class="alert-success"><p>'+text+'</p></div>')
							.delay(150)
							.slideDown(300)
							.delay(4000)
							.slideUp(300,function(){
								$(this).html("");
							});

					}
					else{
						if(cf.find('textarea').val().length < 20){
							text = "Message must contain at least 20 characters!"
						}
						if(cf.find('input').val() == ""){
							text = "All required fields must be filled!";
						}
						$('.message-container').html('<div class="alert-error"><p>'+text+'</p></div>')
							.delay(150)
							.slideDown(300)
							.delay(4000)
							.slideUp(300,function(){
								$(this).html("");
							});
					}
				},function(){
					$('.message-container').html('<div class="alert-error"><p>Connection to server failed!</p></div>')
							.delay(150)
							.slideDown(300)
							.delay(4000)
							.slideUp(300,function(){
								$(this).html("");
							});
				});

				event.preventDefault();

			});

		}

		/* ---------------------------------------------------- */
		/*	Google Maps											*/
		/* ---------------------------------------------------- */

		if ($('#googleMap').length) {

			$(document).ready(function() {

				var myCenter = new google.maps.LatLng(30.2259488, -97.7145152);

				function loadMap() {
				  	var mapProp = {
					    center: myCenter,
					    zoom:13,
					    mapTypeId:google.maps.MapTypeId.ROADMAP

					};

					var map = document.getElementById('googleMap');

					if(map !== null){

				    	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

					}

		            var marker = new google.maps.Marker({
		               position:myCenter,
		               map: map,
		               icon: 'images/map_marker.png'
		            });
		            
		            marker.setMap(map);

		            //Zoom to 7 when clicked on marker
		            google.maps.event.addListener(marker,'click',function() {
		               map.setZoom(9);
		               map.setCenter(marker.getPosition());
		            });

				}
				google.maps.event.addDomListener(window, 'load', loadMap);

			});
			
		}

		if ($('#googleMap2').length) {

			$(document).ready(function() {

				var myCenter = new google.maps.LatLng(30.2259488, -97.7145152);

				function loadMap() {
				  	var mapProp = {
					    center: myCenter,
					    zoom:13,
					    mapTypeId:google.maps.MapTypeId.ROADMAP

					};

					var map = document.getElementById('googleMap2');

					if(map !== null){

				    	var map = new google.maps.Map(document.getElementById("googleMap2"),mapProp);

					}

		            var marker = new google.maps.Marker({
		               position:myCenter,
		               map: map,
		               icon: 'images/map_marker.png'
		            });
		            
		            marker.setMap(map);

		            //Zoom to 7 when clicked on marker
		            google.maps.event.addListener(marker,'click',function() {
		               map.setZoom(9);
		               map.setCenter(marker.getPosition());
		            });

				}
				google.maps.event.addDomListener(window, 'load', loadMap);

			});
			
		}

	});

})(jQuery);
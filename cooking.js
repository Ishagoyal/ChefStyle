$(document).ready(function(){

	var didScroll;
	var lastScrollTop = 0;
	var minimumScroll = 5;
	var navbarHeight = $('nav').outerHeight();

	$(window).scroll(function(event){
		didScroll = true;
	});

	setInterval(function(){
		if(didScroll){
			hasScrolled();
			didScroll = false;
		}
	},250);

	function hasScrolled(){

		var scrollPosition = $(this).scrollTop();

		if(Math.abs(lastScrollTop - scrollPosition) <= minimumScroll){
			return;
		}

		if(scrollPosition > lastScrollTop && scrollPosition > navbarHeight){
			$('nav').removeClass('nav-down').addClass('nav-up');
			
		}else{
			if(scrollPosition < lastScrollTop){
				$('nav').removeClass('nav-up').addClass('nav-down');
			}
		}

		lastScrollTop = scrollPosition;
	}
 
});


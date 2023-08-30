$(window).scroll(function() {
	var position = $(document).scrollTop();
	var navbarHeight = Math.round($('.section__page__header__main__navbar').outerHeight());
	
	if (position >= navbarHeight) {
		$('.sticky__form').removeClass('pt--15');
		$('.sticky__form').addClass('pt--' + navbarHeight);
	} else {
		$('.sticky__form').removeClass('pt--' + navbarHeight);
		$('.sticky__form').addClass('pt--15');
	}
});
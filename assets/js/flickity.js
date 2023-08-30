$(window).on('load', function() {
	$('.flickity--slider').flickity({
		cellAlign: 'left',
		contain: true,
		freeScroll: false,
		wrapAround: true,
		pageDots: true,
		autoPlay: true
	});
	
	$('.section__page__main__intro .slider_banner').flickity({
		cellAlign: 'center',
		contain: true,
		freeScroll: false,
		wrapAround: true,
		pageDots: true,
		autoPlay: true
	});
	
	$('.section__page__main__slider_gallery .slider_gallery .slider_gallery_images').flickity({
		cellAlign: 'center',
		contain: true,
		freeScroll: false,
		pageDots: false,
		wrapAround: true
	});
	
	$('.section__page__main__slider_gallery .slider_gallery .slider_gallery_thumbnails').flickity({
		asNavFor: '.section__page__main__slider_gallery .slider_gallery .slider_gallery_images',
		cellAlign: 'center',
		contain: true,
		freeScroll: false,
		wrapAround: true
	});
    
    $('.slider_gallery_images').flickity({
		cellAlign: 'center',
		contain: true,
		freeScroll: false,
		pageDots: false,
		wrapAround: true
	});
	
	$('.slider_gallery_thumbnails').flickity({
		asNavFor: '.slider_gallery_images',
		cellAlign: 'center',
		contain: true,
		freeScroll: false,
		wrapAround: true
	});
});
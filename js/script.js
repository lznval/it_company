jQuery(document).ready(function($) {
	$('.menu__icon').click(function(event) {
		$('.menu__icon, .menu__body, .header__content-btn').toggleClass('_active');
	});
});;
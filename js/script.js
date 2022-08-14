$(document).ready(function() {
	$('.header__burger').click(function(){
		console.log('test')
		$('.header__menu').toggleClass('active');
		$('.header__burger').toggleClass('active');
	});
});
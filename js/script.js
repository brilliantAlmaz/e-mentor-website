$(document).ready(function() {
	$('.header__burger').click(function(){
		//console.log('test')
		$('.header__menu').toggleClass('active');
		$('.header__burger').toggleClass('active');
	});
	$('.question__item').each(function(){
		$(this).click(function(){
			$(this).toggleClass('active');
		})
	})
	$('.navigation__item:last').click(function(e){
		e.preventDefault();
	})
	$('.header__link').click(function(e){
		if ($(this).hasClass('active')){
			e.preventDefault();
		}
	})
	$('a').click(function(e){
		if ($(this).hasClass('.navigation__item:last')){
			
		}
		else if (!($(this).attr('href'))){
			e.preventDefault();
			console.log('new page')
			window.open('error.html' , '_self');
		}
	})
})
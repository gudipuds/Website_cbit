$(document).ready(function(){$('#menu').find('a').click(menu);function menu(){$(this).parents('ul:first').find('a').removeClass('active').end().end().addClass('active');}
function trigger(data){var el=$('#menu').find('a[href$="'+data.id+'"]').get(0);menu.call(el);}
if(!window.location.hash){$('#menu a:first').click();}});

jQuery(function( $ ){
	$('a.change_section').click(function(){
	$('#menu li a').removeClass('active');
	var fragment = this.getAttribute('title');
	$('#menu a[title=' + fragment + ']').toggleClass('active');
	});
	
});

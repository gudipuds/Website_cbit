$(document).ready(function() {
	$('a.panel').click(function () {
		$('a.panel').removeClass('selected');
		$(this).addClass('selected');
		current = $(this);
		$('#wrapper').scrollTo($(this).attr('href'), 600);		
		return false;
	});
	$(window).resize(function () {
		resizePanel();
	});
});

function resizePanel() {  
     //get the browser width and height  
     width = $(window).width();  
     height = $(window).height();  
     //get the mask width: width * total of items  
     mask_width = width * $('.item').length;  
     //set the dimension   
     $('#wrapper, .item').css({width: width, height: height});  
     $('#mask').css({width: mask_width, height: height});  
     //if the item is displayed incorrectly, set it to the corrent pos  
     $('#wrapper').scrollTo($('a.selected').attr('href'), 0);  
}  

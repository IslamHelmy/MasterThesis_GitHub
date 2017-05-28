$(document).ready(function() {
	//Buttons
	$('.btnTall').each(function() {
		$(this).append('<span class="btnArrow"></span>');
		$(this).prepend('<span class="btnIcon"></span>');
	});
	
	var ua = $.browser;
	if ( ua.msie ) {
		$('.btn').each(function() {
			$(this).append('<div class="corner cornerTL"></div><div class="corner cornerTR"></div><div class="corner cornerBL"></div><div class="corner cornerBR"></div>');
			$(this).css({'border':'none'})
		});
	}
});
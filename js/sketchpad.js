$(document).ready(function() {
	

	for (var j = 0; j < 16; j++) {
		for (var i = 0; i <= 15; i++) {
			$('<div></div').appendTo('#container');

		}
	}

	$('div').hover(function() {

		$(this).addClass('highlighted');
	}, function() {

		$(this).removeClass('highlighted');
	})
})
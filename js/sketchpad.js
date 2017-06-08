function grid(gridSize) {

	var containerSize = 500 / gridSize;

	$('#container').empty();

	for (var j = 1; j <= gridSize; j++) {

		for (var i = 2; i <= gridSize + 1; i++) {
			$('<div class="cell"></div>').appendTo('#container');
		}
	}

	$('.cell').hover(function() {

		$(this).addClass('highlighted');
	})

	$('.cell').width(containerSize);
	$('.cell').height(containerSize);
}


$(document).ready(function() {
	grid(16);  //starting grid size

	$('#clear').on('click', function () {

		$('.cell').removeClass('highlighted');
	})
	

	$('button#new').click(function () {
		$('.cell').removeClass('highlighted');
		var newSize = prompt('How big would you like the grid to be?' );
		grid(newSize);

	})
})
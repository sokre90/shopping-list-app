$(document).ready(function() {
	$('#items ul').hide();
	// $('#btn1').click(function(event) {
	$('select').change(function(event) {
		var choice = $('#items.ul option:selected').val();
		if (choice == 'fruit') {
			// $('#items ul:first-child').show();
			$('.fruit').show();
			// $('.vegetables, .beverages, .meat, .other').hide();
		}
		else if (choice == 'vegetables') {
			$('.vegetables').show();
			// $('.fruit, .beverages, .meat, .other').hide();
		}
		else if (choice == 'beverages') {
			$('.beverages').show();
			// $('.fruit, .vegetables, .meat, .other').hide();
		}
		else if (choice == 'meat') {
			$('.meat').show();
			// $('.fruit, .vegetables, .beverages, .other').hide();
		}
		else if (choice == 'other') {
			$('.other').show();
			// $('.fruit, .vegetables, .beverages, .meat').hide();
		}
		else if (choice = 'all categories') {
			var all = $('#items ul').show();
			$(all).show();
		}
		event.preventDefault();
	})

	$('#list').hide();
	$('input').change(function() {
		$('#list').show();
		$('.shoplist').empty();
		$('form input:checked').each(function() {
			var shoplist = $(this).val(); 
			$('<li>').text(shoplist).appendTo('.shoplist');
		})
	})
})
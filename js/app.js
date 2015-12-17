$(document).ready(function() {
	$('.fruit, .vegetables, .beverages, .meat, .other').hide();
	// $( "select#groceries option:selected").val();
	// $( "select.food input:selected").val();
	// var fruitArray = ["Apples", "Oranges", "Pineapple", "Strawberries", "Bananas"];
	// document.getElementById("fruit").innerHTML = fruitArray;
	$('#btn1').click(function(event) {
		var choice = $('.categories option:selected').val();
		if (choice == 'fruit') {
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
			var all = $('.fruit, .vegetables, .beverages, .meat, .other').show();
			$(all).show();
		}
		event.preventDefault();
	})

	$('input').change(function() {
		$('.shoplist').empty();
		$('form input:checked').each(function() {
			var shoplist = $(this).val(); 
			$('<li>').text(shoplist).appendTo('.shoplist');
		})
	})
})
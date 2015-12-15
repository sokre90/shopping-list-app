$(document).ready(function() {
	$('.fruit, .vegetables, .beverages, .meat, .other').hide();
	// $( "select#groceries option:selected").val();
	// $( "select.food input:selected").val();
	// var fruitArray = ["Apples", "Oranges", "Pineapple", "Strawberries", "Bananas"];
	// document.getElementById("fruit").innerHTML = fruitArray;
	$('#btn1').click(function(event) {
		var choice = $('#groceries option:selected').val();
		if (choice == 'fruit') {
			$('.fruit').show();
			$('.vegetables, .beverages, .meat, .other').hide();
		}
		else if (choice == 'vegetables') {
			$('.vegetables').show();
			$('.fruit, .beverages, .meat, .other').hide();
		}
		else if (choice == 'beverages') {
			$('.beverages').show();
			$('.fruit, .vegetables, .meat, .other').hide();
		}
		else if (choice == 'meat') {
			$('.meat').show();
			$('.fruit, .vegetables, .beverages, .other').hide();
		}
		else if (choice == 'other') {
			$('.other').show();
			$('.fruit, .vegetables, .beverages, .meat').hide();
		}
		event.preventDefault();
	})

	function addToList() {
		var shoplist = $('input:checked').val(); 
		$('<li>').text(shoplist).appendTo('.shoplist');
	}
	function removeItem() {
		var del = $('input:unchecked').val();
		$('.shoplist').remove(del);
	}
	$('input').change(function() {
		// var shoplist = $('input:checked').val(); 
		// $('<li>').text(shoplist).appendTo('.shoplist');
		$('form input:checked').each(function() {
			addToList();
		})
		$('form input:unchecked').each(function() {
			removeItem();
		})
	})

	// $('.add').click(function(event) {
	// 	$('body')
	// 		.on('click', '.add', addToList)
	// 		.find('input:checked')
	// 		.text(shoplist);
	// 	event.preventDefault();
	// })
	

});
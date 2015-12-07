$(document).ready(function() {
	$('.fruit-box').hide();
	$('#fruit').mousedown(function() {
		$('.fruit-box').show();
	})
	.mouseup(function() {
		$('.fruit-box').show();
	})
	// $('body').mousedown(function() {
	// 	$('.fruit-box').hide();
	// })

	// veggie box

	$('.veggie-box').hide();
	$('#veggies').mousedown(function() {
		$('.veggie-box').show();
	})
	.mouseup(function() {
		$('.veggie-box').show();
	})
	$('body').mousedown(function() {
		$('.veggie-box').hide();
	})

	// meat box

	$('.meat-box').hide();
	$('#meat').mousedown(function() {
		$('.veggie-box').show();
	})
	.mouseup(function() {
		$('.meat-box').show();
	})
	$('body').mousedown(function() {
		$('.meat-box').hide();
	})

	// drink box

	$('.drink-box').hide();
	$('#beverages').mousedown(function() {
		$('.drink-box').show();
	})
	.mouseup(function() {
		$('.drink-box').show();
	})
	$('body').mousedown(function() {
		$('.drink-box').hide();
	})

	// other box

	$('.other-box').hide();
	$('#house').mousedown(function() {
		$('.other-box').show();
	})
	.mouseup(function() {
		$('.other-box').show();
	})
	$('body').mousedown(function() {
		$('.other-box').hide();
	})

	// add items

	$('.click-orange').mousedown(function() {
		$('.click-orange').css('color', 'white')
	})
	// .mouseup.(function() {
	// 	$('.click-orange').css('color', 'white')
	// })
	
	// remove item

	// $('.click-orange').mousedown(function() {
	// 	$('.click-orange').css('color', 'black')
	// })
	// .mouseup(function() {
	// 	$('.click-orange').css('color', 'black')
	// })
})
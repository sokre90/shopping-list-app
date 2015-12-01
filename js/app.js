alert("test");
$(document).ready(function) {
	$('#fruit').mousedown(function() {
		$('.fruit-box').show();
	})
	.mouseup(function() {
		$('.fruit-box').hide();
	})
}
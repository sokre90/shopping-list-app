$(document).ready(function() {
  $('.fruit-box').hide();
	$('#fruit').mousedown(function() {
	   $('.fruit-box').show();
	}).mouseup(function() {
    $('.fruit-box').hide();
  });
});

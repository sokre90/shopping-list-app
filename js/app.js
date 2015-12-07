$(document).ready(function() {
	$('#fruit #vegetable #meat #beverages #other').submit(function(event) {
		// alert("handler .submit called")
		event.preventDefault();
	})
	// $( "select#groceries option:selected").val();
	// $( "select.food input:selected").val();
	$('#groceries').change(function() {
		// alert("its working")
	if $('.fruit').click();
		$('#fruit').show();
	})	
});
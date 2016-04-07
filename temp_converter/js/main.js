// When the user clicks on the "F to C" button 
$('#fahrenheit_to_celsius').on('click', function () {
	// GET the value of #temperature and associate it with a varible called userTemp.
	var userTemp = $('#temperature').val();

	// convert the varible userTemp to the datatye number (parseFloat) with 2 decimal places.
	userTemp = parseFloat(userTemp).toFixed(2);
	console.log("value of userTemp right after parseFloat: " + userTemp);
	console.log("The data type of userTemp is: " + (typeof 'userTemp'));

	//if ((typeof 'userTemp') === "string")

	//actually convert the tempurature from Fahrenheit to Celsius, and store it in a new varible called convertedTemp
	var convertedTemp = ((userTemp - 32) / 1.8); 
	console.log("The data type of convertedTemp is: " + (typeof 'convertedTemp'));
	/*display the tempurature that the user inputted in Celcius as #result
		on the left it will display userTemp (Fahrenheit temp value)
		on the right it will display the converted tempurature in Celsius
	*/
	$('#result').html(userTemp + " Fahrenheit is " + convertedTemp + " Celsius.");

});
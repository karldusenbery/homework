/**
*
* Part 1:
*
*/

// 1. Go to style.css and add a class called fun. Style that class with your choice of background-color and text color.
//DONE

// 2. Using jQuery, add the fun class to the elements with the class .box
$('.box').addClass('fun');

// 3. When #box2 is clicked on
$('#box2').on('click', function () {
	// a) Remove the crazy class from all the items with a class of .box
	$('.box').removeClass('crazy');

	// b) Add the crazy class to the h1
	$('h1').addClass('crazy');

	// c) Slide toggle #box3
	$('#box3').slideToggle(300);
});
	


// 4. When any .box is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
$('.box').on('click', function () {
	$('h1').text('jQuery Ninja')
})

// 5. Have the following code execute when the #box1 is clicked. Write a JavaScript comment with a description of what happened. 
$('#box1').on('click', function () {
	// change the imaage source of all elements with class .motot to "images/moto.jpg" so that the image changes
	$(".moto").attr("src", "images/moto.jpg");
})



/**
*
* Part 2:
*
*/

// 6. Hide the item with the id #dropdownMenu
$('#dropdownMenu').hide();


// 7. When the element with the id #dropdownButton is clicked
$('#dropdownButton').on('click', function () {
	// a) slide toggle #dropdownMenu
	$('#dropdownMenu').slideToggle(500);
});



/**
*
* Part 3:
*
*/

// 8. Hide the item with the id #answer2
$('#answer2').hide();

// 9. Show the item with the id #answer1
$('#answer1').show();

// 10. When #question2 is clicked:
$('#question2').on('click', function () {
	// a) Slide down #answer2
	$('#answer2').slideDown(500);

	// b) Slide up #answer1
	$('#answer1').slideUp(500);

	// c) Remove the active class from all list items
	$('li').removeClass('active');

	// d) Add the active class to #question2
	$('#question2').addClass('active');
});


// 11. When #question1 is clicked:
$('#question1').on('click', function () {
	// a) Slide down #answer1
	$('answer1').slideDown(500);
	// b) Slide up #answer2
	$('answer2').slideUp(500);
	// c) Remove the active class from all list items
	$('li').removeClass('active');
	// d) Add the active class to #question1
	$('#question1').addClass('active');
});

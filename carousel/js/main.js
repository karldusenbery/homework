//create an array of image paths
var images = ["images/image_1.jpg", "images/image_2.jpg", "images/image_3.jpg", "images/image_4.jpg", "images/image_5.jpg", "images/image_6.jpg"];

//create and initialize a varible for our current position
var currentPosition = 0;

//an array to store like counts for images in the images[] array
var likes = [0,0,0,0,0,0];

//display the likes
$('#votes').html('Likes: ' + likes[currentPosition]);

// Advance to the next image when user clicks on the next button
$('#next').on('click', function() {

	//add 1 to the currentPosition
	currentPosition += 1;

	//enable the Previous button
	$('#prev').removeAttr('disabled');

	//if currentPosition is last image, disable the Next button.
	if (currentPosition === (images.length - 1 )) {
		//disable the Next button
		$('#next').attr('disabled', 'disabled');
	}

	//change the src of #image-to-vote-on to image at that index
	$('#image-to-vote-on').attr('src', images[currentPosition]);
});


// Go to to the previous image when user clicks on the previous button
$('#prev').on('click', function() {

	//subtract 1 to the currentPosition
	currentPosition -= 1;

	//If the currentPosition is not the first image, enable the Previous button
	if (currentPosition > 0){
		$('#prev').removeAttr('disabled');
	}

	//If the currentPosition is the first image, re-enable the Next button, and disable the Previous button
	if (currentPosition === 1){
		$('#next').removeAttr('disabled');
		$('#prev').attr('disabled', 'disabled');
	}

	//change the src of #image-to-vote-on to image at that index
	$('#image-to-vote-on').attr('src', images[currentPosition]);
});

// When the user clicks on the thumbsUp button, add a like on the current image.
$('#upvote').on('click', function () {

	console.log('Value of currentPosition in thumbsUp onClick function: ' + currentPosition);

	//add 1 to the likes on the current image
	likes[currentPosition] += 1;

	console.log('Value of likes[currentPosition] in thumbsUp onClick function before adding 1: ' + likes[currentPosition]);

});

// When the user clicks on the thumbsDown button, remove a like on the current image.
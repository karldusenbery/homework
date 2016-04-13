//create an array of image paths
var images = ["images/image_1.jpg", "images/image_2.jpg", "images/image_3.jpg", "images/image_4.jpg", "images/image_5.jpg", "images/image_6.jpg"];
//create and initialize a varible for our current position
var currentPosition = 0;

// Advance to the next image when user clicks on the next button
$('#next').on('click', function() {

	//If currentPosition is first image, disable the Previous button.
	if (currentPosition === 0 ){
		//disable the Next button
		$('#prev').attr('disabled', 'disabled');
	} else {
		$('#prev').attr('enabled', 'enabled');
	}

	//add 1 to the currentPosition
	currentPosition += 1;

	//if currentPosition is last image, disable the Next button.
	if (currentPosition === (images.length - 1 )) {
		//disable the Next button
		$('#next').attr('disabled', 'disabled');
	}


	//change the src of #image-to-vote-on to image at that index
	$('#image-to-vote-on').attr('src', images[currentPosition]);
});


// Advance to the previous image when user clicks on the previous button


// When the user clicks on the thumbsUp button, add a like on the current image.
// When the user clicks on the thumbsDown button, remove a like on the current image.
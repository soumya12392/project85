//Create a reference for canvas 
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Give specific height and width to the car image
var greencar_width = 75;
var greencar_height = 100;

//Set initial position for a car image
var greencar_x = 5;
var greencar_y = 225;

function add() {
	//upload car, and background images on the canvas
	background_imageTag = new Image();
	background_imageTag.onload = uploadBackground();
	background_imageTag.src = background_image;

	car_imageTag = new Image();
	car_imageTag.onload = uploadGreencar();
	car_imageTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadGreencar() {
	//Define function ‘uploadgreencar’
	ctx.drawImage(car_imageTag, greencar_x, greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == "38") {
			up();
			console.log("up");
		}
	
		if(keyPressed == "40") {
			down();
			console.log("down");
		}
		
		if(keyPressed == "37") {
			left();
			console.log("left");
		}
	
		if(keyPressed == "39") {
			right();
			console.log("right");
		}
		
		
}

function up() {
	//Define function to move the car upwards
	if (greencar_y >= 0) {
		greencar_y -= 10;
		console.log("When up arrow key is pressed, X = " + greencar_x + " and Y = " + greencar_y);
		uploadBackground();
		uploadGreencar();
	}
}

function down() {
	//Define function to move the car downwards
	if (greencar_y <= 225) {
		greencar_y += 10;
		console.log("When down arrow key is pressed, X = " + greencar_x + " and Y = " + greencar_y);
		uploadBackground();
		uploadGreencar();
	}
}

function left() {
	//Define function to move the car left side
	if (greencar_x >= 0) {
		greencar_x -= 10;
		console.log("When left arrow key is pressed, X = " + greencar_x + " and Y = " + greencar_y);
		uploadBackground();
		uploadGreencar();
	}
}

function right() {
	//Define function to move the car right side
	if (greencar_x <= 705) {
		greencar_x += 10;
		console.log("When right arrow key is pressed, X = " + greencar_x + " and Y = " + greencar_y);
		uploadBackground();
		uploadGreencar();
	}
}

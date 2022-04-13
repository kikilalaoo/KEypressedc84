// Create a reference for the canvas
canvas= document.getElementById('myCanvas');
ctx = canvas.getContext("2d")
img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image();
	img_imgTag.onload = uploadimg;
	img_imgTag.src = img_image; 
}  
	function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//write a code to check the type of key pressed
		keyPressed=e.keyCode;
		console.log(keyPressed);
		aplhabetkey()
		document.getElementById("d1").innerHTML="You pressed Alphabet key";
		console.log("alphabet key");
      
		 if(keyPressed >=48 && keyPressed <=57)
 {
	keyPressed=e.keyCode;
	console.log(keyPressed);
	numberkey()
	document.getElementById("d1").innerHTML="You pressed Number key";
	console.log(" Number key")
 }

 else if(keyPressed >=37 && keyPressed <=40)
 {
	keyPressed=e.keyCode;
	console.log(keyPressed);
	arrowkey()
	document.getElementById("d1").innerHTML="You pressed Arrow key";
	console.log("Arrow key")
 }

 else if(keyPressed >=17 && keyPressed <=27)
 {
	keyPressed=e.keyCode;
	console.log(keyPressed);
	specialkey()
	document.getElementById("d1").innerHTML="You pressed Special key";
	console.log("Special key")
 }


}

function aplhabetkey()
{
	//upload respective image with the message. 
img_image= "Alpkey.png"
add();
}
function numberkey()
{
	img_image= "numkey.png"
add();
}
function arrowkey()
{
	img_image= "Arrkey.png"
add();
}
function specialkey()
{
	img_image= "spkey.png"
add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}

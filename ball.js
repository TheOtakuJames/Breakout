var Ball = function() {
	this.image = document.createElement("img");
	this.x = 450;
	this.y = 270;
	this.velocityX = 0;
	this.velocityY = 0;
	this.image.src = "ball.png";
};
var ball = new Ball();
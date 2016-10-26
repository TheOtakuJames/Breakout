var Ball = function() {
	this.image = document.createElement("img");
	this.x = 450;
	this.y = 270;
	this.width = 32;
	this.height = 32;
	this.image.src = "ball.png";
	this.isDead = false;
};

var ball = new Ball();
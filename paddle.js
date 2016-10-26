var Paddle = function() {
	this.image = document.createElement("img");
	this.x = 450;
	this.y = 550;
	this.velocityX = 0;
	this.velocityY = 0;
	this.image.src = "paddle.png";
	this.isDead = false;
	this.height = 32;
	this.width = 128;
};

Paddle.prototype.update = function(deltaTime)
{
	if(keyboard.isKeyDown(keyboard.KEY_RIGHT) == true)
	{
		paddle.x += deltaTime;
	}
	if(keyboard.isKeyDown(keyboard.KEY_LEFT) == true)
	{
	    paddle.x -= deltaTime;
	    if (paddle.x < 0) {

	    }

	}
}

//Paddle.prototype.draw = function(x, y) {
//		(paddle.x, paddle.y);
//}

var paddle = new Paddle();
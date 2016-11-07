var Paddle2 = function() {
	this.image = document.createElement("img");
	this.x = 450;
	this.y = 25;
	this.velocityX = 0;
	this.velocityY = 0;
	this.image.src = "paddle2.png";
	this.isDead = false;
	this.height = 32;
	this.width = 128;
};

Paddle2.prototype.update = function(deltaTime)
{
	if(keyboard.isKeyDown(keyboard.KEY_D) == true)
	{
		paddle2.x += deltaTime;
	}
	if(keyboard.isKeyDown(keyboard.KEY_A) == true)
	{
	    paddle2.x -= deltaTime;
	    if (paddle2.x < 0) {

	    }

	}
}

var paddle2 = new Paddle2();
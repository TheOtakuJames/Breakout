var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();

// This function will return the time in seconds since the function 
// was last called
// You should only call this function once per frame
function getDeltaTime() {
    endFrameMillis = startFrameMillis;
    startFrameMillis = Date.now();

    // Find the delta time (dt) - the change in time since the last drawFrame
    // We need to modify the delta time to something we can use.
    // We want 1 to represent 1 second, so if the delta is in milliseconds
    // we divide it by 1000 (or multiply by 0.001). This will make our 
    // animations appear at the right speed, though we may need to use
    // some large values to get objects movement and rotation correct
    var deltaTime = (startFrameMillis - endFrameMillis) * 0.5;

    // validate that the delta is within range


    return deltaTime;
}

var paddle = new Paddle();
var keyboard = new Keyboard();

function onKeyDown(event) {
    if (event.keyCode == KEY_LEFT) {
        paddle.x -= 1;
        console.log("Bah");
    }
    if (event.keyCode == KEY_RIGHT) {
        paddle.x += 1;
    }
}

function rand(floor, ceil) {
    return Math.floor((Math.random() * (ceil - floor)) + floor);
}

var block1 = document.createElement("img");
block1.src = "Invicible_Block_V2.png";

var block2 = document.createElement("img");
block2.src = "Super_Strong_Block.png";

var block3 = document.createElement("img");
block3.src = "Strong_Block.png";

var block4 = document.createElement("img");
block4.src = "Weak_Block.png";

var speed = 2;

function spawnBall()
{
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;

    var dirX = rand(-2, 2);
    var dirY = rand(-2, 2);

    ball.velocityX = -dirX * speed;
    ball.velocityY = -dirY * speed;
}

spawnBall();

function moveBall() {
    var movX = ball.velocityX;
    var movY = ball.velocityY;

    ball.x = ball.x + movX;
    ball.y = ball.y + movY;
}

for (var i = 0; i < paddle.length; i++) {
    for (var j = 0; j < ball.length; j++) {
        if (intersects(
        ball[j].x - ball[j].width / 2, ball[j].y - ball[j].height / 2,
        ball[j].width, ball[j].height,
        paddle[i].x - paddle[i].width / 2, paddle[i].y - paddle[i].height / 2,
            paddle[i].width, paddle[i].height) == true) {
            moveBall();
        }
    }

}

function run() {
    context.fillStyle = "#121212";
    context.fillRect(0, 0, canvas.width, canvas.height);

    moveBall();

    var deltaTime = getDeltaTime();

    for (var i = 0; i < 9; i++) {
        context.drawImage(block1, 10 + ((block1.width + 2) * i), 10);
    }

    for (var i = 0; i < 9; i++) {
        context.drawImage(block2, 10 + ((block2.width + 2) * i), 50);
    }

    for (var i = 0; i < 9; i++) {
        context.drawImage(block3, 10 + ((block3.width + 2) * i), 90);
    }

    for (var i = 0; i < 9; i++) {
        context.drawImage(block4, 10 + ((block4.width + 2) * i), 130);
    }

    paddle.update(deltaTime);

    context.drawImage(paddle.image, paddle.x, paddle.y);
    context.drawImage(ball.image, ball.x, ball.y);
}

//-------------------- Don't modify anything below here
(function() {
  var onEachFrame;
  if (window.requestAnimationFrame) {
	onEachFrame = function(cb) {
	 var _cb = function() { cb(); window.requestAnimationFrame(_cb); }
     _cb();
	};
 } else if (window.mozRequestAnimationFrame) {
   onEachFrame = function(cb) {
	 var _cb = function() { cb();
window.mozRequestAnimationFrame(_cb); }
	 _cb();
    };
  } else {
	onEachFrame = function(cb) {
	  setInterval(cb, 1000 / 60);
	}
 }

 window.onEachFrame = onEachFrame;
})();

window.onEachFrame(run);
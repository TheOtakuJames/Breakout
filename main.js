var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

window.addEventListener('keydown', function (evt) { onKeyDown(evt);
},
false);

var KEY_LEFT = 37;
var KEY_RIGHT = 39;

var paddle = document.createElement("img");
paddle.src = "paddle.png";

var positionX = 450;
var positionY = 450;

var ball = document.createElement("img");
ball.src = "ball.png";

var ballX = 450;
var ballY = 270;

function onKeyDown(event)
{
	if(event.keyCode == KEY_LEFT){
		positionX -= 1;
	}
	if(event.keyCode == KEY_RIGHT) {
		positionX += 1;
	}
}

function run() {
    context.fillStyle = "#ccc";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(paddle, positionX, positionY);
    context.drawImage(ball, ballX, ballY);
    console.log('Test');
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
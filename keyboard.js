var Keyboard = function() {
	var self = this;

	window.addEventListener('keydown', function(evt) { self.onKeyDown(evt); }, false);
	window.addEventListener('keyup', function(evt) { self.onKeyUp(evt); }, false);

	this.keyListeners = new Array();
	this.keys = new Array();

	this.KEY_LEFT = 37;
	this.KEY_RIGHT = 39;
	this.KEY_A = 65;
	this.KEY_D = 68;

};

Keyboard.prototype.onKeyDown = function(evt)
{
this.keys[evt.keyCode] = true;
};
Keyboard.prototype.onKeyUp = function(evt)
{
this.keys[evt.keyCode] = false;
};
Keyboard.prototype.isKeyDown = function(keyCode)
{
return this.keys[keyCode];
};
;(function() {
  var Game = function(canvasId) {
    var canvas = document.getElementById(canvasId);
    var screen = canvas.getContext('2d');
    var gameSize = {x: canvas.width, y: canvas.height};
    
    this.bodies = [new Player(this, gameSize)];

    var self = this;
    var tick = function() {
      self.update();
      self.draw(screen, gameSize);
      requestAnimationFrame(tick);
    };

    tick();
  };

  Game.prototype = {
    update: function() {
      for (var i = 0; i < this.bodies.length; i++) {
	this.bodies[i].update();
      }
    },

    draw: function(screen, gameSize) {
      screen.clearRect(0, 0, gameSize.x, gameSize.y);
      for (var i = 0; i < this.bodies.length; i++) {
				drawRect(screen, this.bodies[i]);
      }
    },

		addBody: function(body) {
console.log('body added');
			this.bodies.push(body);
		}
  };

  var drawRect = function(screen, body) {
    screen.fillRect(body.center.x - body.size.x /2,
		    body.center.y - body.size.y / 2,
		    body.size.x, body.size.y);
};

  var Keyborder = function() {
    var keyState = {};

    window.onkeydown = function(e) {
      keyState[e.keyCode] = true;
    };

    window.onkeyup = function(e) {
      keyState[e.keyCode] = false;
    };

    this.isDown = function(keyCode) {
      return keyState[keyCode] === true;
    };

    this.KEYS = {LEFT: 65, RIGHT: 68, UP: 87, DOWN: 83, SPACE: 32};
    
  };

    var Mouse = function() {
	var mouseloc = {
	    _x: 0,
	    _y: 0
	};
	
	document.onmousemove = (function (mp) {
	    mouseloc._x = mp.pageX;
	    mouseloc._y = mp.pageY;
	}).bind(this);

	document.onclick = (function (a) {
	    setInterval(function () {
		var slash = new Bullet({x: this.center.x, y:this.center.y - this.size.x / 2},
				       {x:0, y:-6});
		this.game.addBody(slash);
	    }, 3000);
	    console.log(a);
	    console.log('click');
	})
    }

    var Player = function(game, gameSize) {
    this.game = game;
    this.size = { x: 25, y: 25};
	this.center = { x: gameSize.x /2, y: gameSize.y - this.size.x};
	this.rotation = 0;
    this.keyborder = new Keyborder();
    this.cursor = new Mouse();  
  };

  Player.prototype = {
      update: function() {
	  	var dx = this.cursor.x - this.center.x,
		    dy = this.cursor.y - this.center.y;

	  this.rotation = Math.atan2(dy, dx); //radians
	  console.log(Math.atan2(dy, dx));
	  
	  if (this.keyborder.isDown(this.keyborder.KEYS.UP)) {
      this.center.y -= 2;
      } if (this.keyborder.isDown(this.keyborder.KEYS.DOWN)) {
      this.center.y += 2;
      }	if (this.keyborder.isDown(this.keyborder.KEYS.LEFT)) {
      this.center.x -= 2;
      }	if (this.keyborder.isDown(this.keyborder.KEYS.RIGHT)) {
       this.center.x += 2;
      }  else if (this.keyborder.isDown(this.keyborder.KEYS.SPACE)) {
      var bullet = new Bullet({x: this.center.x, y: this.center.y - this.size.x / 2},
			{x: 0, y: -6});
			this.game.addBody(bullet);
			}
		}
	};

	var Bullet = function(center, velocity) {
		this.size = {x: 3, y: 3};
		this.center = center;
	        this.velocity = velocity;
//	        setTimeout(function(){
//		    this == undefined;
//		}, 1800).bind(this);
	};

    //var Slash = function(center, )

    
	Bullet.prototype = {
	    update: function() {

		this.center.x += this.velocity.x;
		this.center.y += this.velocity.y;
		console.log('updating line 97');
		}		
};

  window.onload = function() {
    new Game("screen");
  };
})();

!function e(t,i,n){function o(s,c){if(!i[s]){if(!t[s]){var h="function"==typeof require&&require;if(!c&&h)return h(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var d=i[s]={exports:{}};t[s][0].call(d.exports,function(e){var i=t[s][1][e];return o(i?i:e)},d,d.exports,e,t,i,n)}return i[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(){!function(){var e=function(e){var t=document.getElementById(e),i=t.getContext("2d"),n={x:t.width,y:t.height};this.bodies=[new o(this,n)];var r=this,s=function(){r.update(),r.draw(i,n),requestAnimationFrame(s)};s()};e.prototype={update:function(){for(var e=0;e<this.bodies.length;e++)this.bodies[e].update()},draw:function(e,i){e.clearRect(0,0,i.x,i.y);for(var n=0;n<this.bodies.length;n++)t(e,this.bodies[n])},addBody:function(e){console.log("body added"),this.bodies.push(e)}};var t=function(e,t){e.fillRect(t.center.x-t.size.x/2,t.center.y-t.size.y/2,t.size.x,t.size.y)},i=function(){var e={};window.onkeydown=function(t){e[t.keyCode]=!0},window.onkeyup=function(t){e[t.keyCode]=!1},this.isDown=function(t){return e[t]===!0},this.KEYS={LEFT:65,RIGHT:68,UP:87,DOWN:83,SPACE:32}},n=function(){var e={_x:0,_y:0};document.onmousemove=function(t){e._x=t.pageX,e._y=t.pageY}.bind(this),document.onclick=function(e){setInterval(function(){var e=new r({x:this.center.x,y:this.center.y-this.size.x/2},{x:0,y:-6});this.game.addBody(e)},3e3),console.log(e),console.log("click")}},o=function(e,t){this.game=e,this.size={x:25,y:25},this.center={x:t.x/2,y:t.y-this.size.x},this.rotation=0,this.keyborder=new i,this.cursor=new n};o.prototype={update:function(){var e=this.cursor.x-this.center.x,t=this.cursor.y-this.center.y;if(this.rotation=Math.atan2(t,e),console.log(Math.atan2(t,e)),this.keyborder.isDown(this.keyborder.KEYS.UP)&&(this.center.y-=2),this.keyborder.isDown(this.keyborder.KEYS.DOWN)&&(this.center.y+=2),this.keyborder.isDown(this.keyborder.KEYS.LEFT)&&(this.center.x-=2),this.keyborder.isDown(this.keyborder.KEYS.RIGHT))this.center.x+=2;else if(this.keyborder.isDown(this.keyborder.KEYS.SPACE)){var i=new r({x:this.center.x,y:this.center.y-this.size.x/2},{x:0,y:-6});this.game.addBody(i)}}};var r=function(e,t){this.size={x:3,y:3},this.center=e,this.velocity=t};r.prototype={update:function(){this.center.x+=this.velocity.x,this.center.y+=this.velocity.y,console.log("updating line 97")}},window.onload=function(){new e("screen")}}()},{}]},{},[1]);
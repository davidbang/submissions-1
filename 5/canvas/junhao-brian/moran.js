var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var makePhone = function(x,y,ctx){
		return{
				x: x,
				y: y,
				ctx: ctx,
				dx: 1,
				dy: 1,
				// put image in
				draw : function() {
						ctx.fillStyle=this.color;
						ctx.fillRect(this.x,this.y,this.w,this.h);
						ctx.stroke();
				},
				move : function() {
						this.x = this.x + this.dx;
						this.y = this.y + 2*Math.random() -1;
						if (this.x < 10 || this.x > 580){
								this.dx = this.dx * -1;
						}
						if (this.y < 20 || this.y > 580){
								this.y = 100 + 400*Math.random();
						}
				}
		}
};


// ---------------

var update = function() {
		ctx.fillStyle="#ffffff";
		ctx.fillRect(0,0,600,600);
		for (var i = 0; i < blocks.length; i++){
				blocks[i].move();
				blocks[i].draw();
		}
		window.requestAnimationFrame(update);
};


var clicked = function(e) {
		var x = e.offsetX;
		var y = e.offsetY;
		var w = 10+Math.random()*40;
		var h = 5+Math.random()*40;
		var b = makeBlock(x,y,w,h,ctx);
		blocks.push(b);
}; 


var blocks = [];
blocks.push(makeBlock(50,100,30,15,ctx));
blocks.push(makeBlock(100,200,30,15,ctx));
c.addEventListener("click",clicked);
window.requestAnimationFrame(update);

var clicked = function(e){
		e.preventDefault();
		//ctx.beginPath();
		ctx.arc(e.offsetX,e.offsetY,
						15,0,2*Math.PI);
		ctx.fillStyle="#ff0000";
		ctx.stroke();
		ctx.fill();
};

var clear = function(e){
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0,0,600,600);
		ctx.beginPath();
		
};
c.addEventListener("click",clicked);
var b = document.getElementById("b");
b.addEventListener("click",clear);


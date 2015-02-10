var mouseX;
var mouseY;

var music = document.getElementById('music');
console.log('music',music);
var canvas = document.getElementById('canvas');
var canvasrect = canvas.getBoundingClientRect();
var minX = canvasrect.left;
var maxX = canvasrect.right;
var minY = canvasrect.top;
var maxY = canvasrect.bottom;

var goalX;
var goalY;

var curSrc;

window.addEventListener('mousemove',function(e){
    mouseX=e.pageX;
    mouseY=e.pageY;
    //console.log("mouse moved to ("+mouseX+','+mouseY+')')
});
var div;
//var winning_image;
var win = function(){
    div = document.createElement('div');
    div.className = 'init';
    div.setAttribute('id','winner');
    div.innerHTML = 'YAY!<br>';
    div.innerHTML+= '<img src="winner.jpg">';
    canvas.appendChild(div);
    div.className = 'fade';

    //winning_image = "winner.jpg"
 //   canvas.innerHTML = '<div id="winner">';
//canvas.innerHTML += '<img src="winner.jpg" style="position:absolute; align: center; top: 200px; left: 480px;"></div>';

    canvas.style.cursor = 'auto';
    canvas.removeEventListener('click',win);
    //window.alert("Congratulations! You've found the invisible Topher! Press 'Start' to replay");
    window.clearTimeout(game);
    music.pause();
}

var check = function(){
    //calculate distance
    var dx = mouseX-goalX;
    var dy = mouseY-goalY;
    var dist = Math.sqrt(dx*dx+dy*dy);
    dist = Math.floor(dist);
    var range = Math.sqrt(((maxX-minX)/2)*((maxX-minX)/2)+((maxY-minY)/2)*((maxY-minY)/2))/6;
    console.log(dist);
    if(dist<20){
	canvas.style.cursor = 'pointer';
	canvas.addEventListener('click',win);
    }
    else{
	canvas.style.cursor = 'auto';
	canvas.removeEventListener('click',win);
    }
    var newSrc = 'Topher1.m4a';
    console.log(dist+' < '+range+' ?');

    for(var i=1;i<8;i++){
	if(dist < range*i){
	    newSrc = "Topher"+(9-i)+'.m4a';
	    break;
	}
    }
    if(curSrc!=newSrc || music.paused){
	curSrc = newSrc;
	music.src = curSrc;
	music.play();
    }
}

var game;
function start(){
    goalX = Math.random()*(maxX-minX)+minX;
    goalY = Math.random()*(maxY-minY)+minY;
    console.log(goalX+','+goalY);
    game = setInterval(check,100);
    //canvas.innerHTML += '<img src="cheating.png" style="position:absolute; top: 600 px; left: 470px;"></div>';
    document.getElementById('winner').className = 'init';
}
function stop(){ 
    window.clearTimeout(game);
    music.pause();
}


document.getElementById('start').addEventListener('click',start);
document.getElementById('stop').addEventListener('click',stop);

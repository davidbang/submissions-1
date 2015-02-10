window.onload = function(){
    move.style.top = h + "px";
    move.style.left= w + "px";
    ho();
};
var w = window.innerWidth *.89 - (window.innerWidth*.89 * Math.random())
var h = window.innerHeight * .89- (window.innerHeight*.89 * Math.random())

var mouseX;
var mouseY;

var button = document.getElementById("visible")

var low = document.getElementById("low")
var loow = document.getElementById("loow")
var supahigh = document.getElementById("supahigh")
var high = document.getElementById("high")
var med = document.getElementById("med")
var merry = document.getElementById("merry")


window.addEventListener('mousemove',function(e){
    mouseX=e.pageX;
    mouseY=e.pageY;
    distance();
});


function distance(){
    return Math.sqrt(Math.pow(mouseX-(w+40),2) + Math.pow(mouseY-(h+40),2));
};

function musi(){
    var dist= distance();
    console.log(dist);
    if (dist<80){
	supahigh.play();
    }
    else if (dist < 120){
	high.play();
    }
    else if (dist < 240) {
	med.play();
    }
    else if (dist <480){
	low.play();
    }
    else{
	loow.play();
    }
}

var santa;
function ho(){
    console.log("ho");
    santa= setInterval("musi()",1050);
}

var move = document.getElementById("move")
var picture=document.getElementById("picture");


function togglev(){
    if (picture.className == "img visible"){
	picture.className = "img hidden";
    }
    else{
	picture.className ="img visible";
    }  
};

var refresh = document.getElementById("finished");

function newGame(){
    location.reload();
}

refresh.addEventListener('click',newGame);

var myEvent;
function startit() {
    console.log("arewehere");
    myEvent = setInterval("moveit()",10);
};

function moveit() {
    //console.log("arewehere2");
    if( Math.abs(window.innerWidth/2-40 -w)<5 && Math.abs(window.innerHeight/2-h)<5){
	clearInterval(myEvent);
	merry.play();
    }
    if ((window.innerWidth/2-40)<w) {
	w=w-3;
    } else {
	w=w+3;
    }
    if (window.innerHeight/2<h) {
	h=h-3;
    } else {
	h=h+3;
    }
    move.style.left=w+"px";
    move.style.top=h+"px";
};

function colors(){
    if (document.body.style.background=="green"){
	document.body.style.background="red";
    }
    else{
	document.body.style.background="green";
    }
}

var colorful;

function findsanta(){
    if (picture.className == "img hidden"){
	picture.className ="img visible";
	clearInterval(santa);
	startit();
	refresh.className="existent";
	colorful=setInterval("colors()",1500);
    }
};


//document.getElementById("visible").addEventListener('click',togglev);
picture.addEventListener('click',findsanta);


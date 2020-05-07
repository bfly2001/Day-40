
//canvas and context
var canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

//variables and constants
var x = 0;
var deltaX = 0;
var deltaY = 0;
var virusX = 0;
var blasterimg = new Image();
var virusimg = new Image();
blasterimg.src = 'images/virusBlaster.png';
virusimg.src = 'images/viral.png';

function drawVirus() {
    ctx.drawImage(virusimg, virusX, 0, 55, 54);
    for (i = 0; i < 10; i++) {
        ctx.drawImage(virusimg, virusX, 0, 55, 54);
    }
}

//move blaster right and left on button click
function moveRight() {
    deltaX += 2;
    drawRectangle();
}

function moveLeft() {
    deltaX -= 2;
    drawRectangle();
}

//listen for event
window.addEventListener("keydown", moveSomething, false);

//move blaster right and left using arrow keys
function moveSomething(e) {
    switch(e.keyCode) {
        case 37:
            // left key
            deltaX -= 2;
            break;
        case 39:
            // right key
            deltaX += 2;
            break;
    }
    e.preventDefault();
    drawRectangle();
}

//draw function for blaster
function drawRectangle() {
    //ctx.save();
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(115, 115);
    ctx.translate(-115, -115);
    ctx.drawImage(blasterimg, 125 + deltaX, 100 + deltaY, 50, 50);
    //ctx.restore();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
//draw viruses
    drawVirus();
//call function for blaster
    drawRectangle();
}

var interval = setInterval(draw, 10);

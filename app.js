//listen for event to start
window.addEventListener("keydown", moveSomething, false);

//variables and constants
var x = 0;
var deltaX = 0;
var deltaY = 0;
var canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
var virusimg = new Image();
var blasterimg = new Image();

//initialize
function init() {
    blasterimg.src = 'images/virusBlaster.png';
    virusimg.src = 'images/viral.png';
    drawVirus();
    window.requestAnimationFrame(drawVirus);
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
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(115, 115);
    ctx.translate(-115, -115);
    ctx.drawImage(blasterimg, 125 + deltaX, 100 + deltaY, 50, 50);
    ctx.restore();
    window.requestAnimationFrame(drawVirus);
}

//draw frame function for virus sprite
function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(virusimg, frameX, frameY, 38, 40, canvasX, canvasY, 38, 40);
}

//draw function for  virus sprite
function drawVirus() {
   virusimg.onload = function() {
        ctx.save();
        drawFrame(0, 0, 0, 0);
        drawFrame(1, 0, 38, 0);
        drawFrame(0, 0, 38, 0);
        drawFrame(2, 0, 38, 0);
        ctx.restore();
    }
    window.requestAnimationFrame(drawVirus);
}
//call initialize function
init();
//call drawVirus function
drawVirus();

//call function for blaster
drawRectangle();

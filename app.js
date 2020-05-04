window.addEventListener("keydown", moveSomething, false);

var deltaX = 0;
var deltaY = 0;
var canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
var virusimg = new Image();
var blasterimg = new Image();

function init() {
    blasterimg.src = 'images/virusBlaster.png';
    virusimg.src = 'images/viral.png';
    window.requestAnimationFrame(drawVirus);
}

function moveRight() {
    deltaX += 2;
    drawRectangle();
}

function moveLeft() {
    deltaX -= 2;
    drawRectangle();
}

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

function drawRectangle() {
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(115, 115);
    ctx.translate(-115, -115);
    ctx.fillStyle = "yellow";
    ctx.drawImage(blasterimg, 125 + deltaX, 100 + deltaY, 50, 50);
    ctx.drawImage(virusimg, 0, 0);
    ctx.restore();
    window.requestAnimationFrame(drawVirus);
}

function drawVirus() {
   virusimg.onload = function() {
       ctx.drawImage(virusimg,0, 0);
    }
}

init();

drawVirus();

drawRectangle();

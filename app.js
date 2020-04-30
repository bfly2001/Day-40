window.addEventListener("keydown", moveSomething, false);

var deltaX = 0;
var deltaY = 0;
var angle = 0;

function moveUp() {
    deltaY -= 2;
    drawRectangle();
}

function moveDown() {
    deltaY += 2;
    drawRectangle();
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
            angle -= 2;
            break;
        case 38:
            // up key
            deltaY -= 2;
            break;
        case 39:
            // right key
            angle += 2;
            break;
        case 40:
            // down key
            deltaY += 2;
            break;
    }
    e.preventDefault();

    drawRectangle();
}

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = "yellow";

function drawRectangle() {
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.moveTo(200 + deltaX, 100 + deltaY);
    ctx.translate(115, 115);
    ctx.rotate((Math.PI / 180) * angle);
    ctx.translate(-115, -115);
    ctx.fillRect(120 + deltaX, 120 + deltaY, 50, 50);
    ctx.restore();
}

drawRectangle();

window.addEventListener("keydown", moveSomething, false);

var deltaX = 0;
var deltaY = 0;

function moveSomething(e) {
    switch(e.keyCode) {
        case 37:
            // left key
            deltaX -= 2;
            break;
        case 38:
            // up key
            deltaY -= 2;
            break;
        case 39:
            // right key
            deltaX += 2;
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.moveTo(200 + deltaX, 100 + deltaY);
    ctx.fillRect(20 + deltaX, 20 + deltaY, 50, 50);
}

drawRectangle();

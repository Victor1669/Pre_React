let vw;
let contWidth, bolaSize;


let ballX = 0;
let ballY = 0;

let raq1Y = 0;

let raq2Y = 0;

let direcao = 1;

setInterval(() => {
    vw = document.body.offsetWidth / 100;
    contWidth = 80 * vw;
    ballSize = 5 * vw;
}, 1000/30);
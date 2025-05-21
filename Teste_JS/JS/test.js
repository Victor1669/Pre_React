function ball(speed) {
    ballX += direcao * speed;
    // ballY += direcao * speed;

    document.documentElement.style.setProperty('--bolaLeft', `${ballX}px`);
    document.documentElement.style.setProperty('--bolaTop', `${ballY}px`);
    document.documentElement.style.setProperty('--bolaCor', `yellow`);

    if (ballX + bolaSize > contWidth / 2) {
    }
}
function raquet1(speed) {
    raq1Y += speed * 1;
    document.documentElement.style.setProperty('--raq1Top', `${raq1Y}px`);
}
function raquet2(speed) {
    raq2Y += speed * 1;
    document.documentElement.style.setProperty('--raq2Top', `${raq2Y}px`);
}


setInterval(() => {
    ball(5);
    raquet1(0);
    raquet2(0);
}, 1000/30);

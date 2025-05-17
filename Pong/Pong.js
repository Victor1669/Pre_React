const esfera = document.getElementById("esfera");

// CONTAINER
const container = {
    width: 90,
    height: 60,
}
let met_contX, met_contY;
    met_contX = 1150;
    met_contY = 260 ;
    
// RAQUETES
const raqueteUm = {
    width: 0,
    height: 0,
    posX: 180,
    posY: 440,
    direcaoY: 1,
    speed: 4,
}

const raqueteDois = {
    width: 0,
    height: 0,
    posX: 180,
    posY: 440,
    direcaoY: 1,
}

// BOLA
const circulo = {
    width: 50,
    height: 50,
    posX: met_contX - 50 / 2,
    direcaoX: -1,
    posY: met_contY - 50 / 2,
    direcaoY: 1,
    display: "block",
}
let speed, spd;
    spd = 4;
    speed = false;
    circulo.speed = spd;
    raqueteUm.speed = spd;

// PONTOS
let v1 = parseInt(document.getElementById("ponto1").textContent);
let v2 = parseInt(document.getElementById("ponto2").textContent);




// FUNÇÕES

// ========== TELA INICIAL ==========
function telaInicial(){
    setTimeout(() => {
        circulo.display = "none";
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, 300);
}
let ativar = true;
function configuracoes() {
    const opcoes = document.getElementById("opcoes");
    const configurar = document.getElementById("configurar")
    const jogar = document.getElementById("jogar");

    if (ativar == true){
        opcoes.setAttribute("style", `display: flex;`);
        jogar.setAttribute("style", `visibility:hidden;`) 
        configurar.innerText = "Voltar";
        ativar = false    
    } else if (ativar == false){
        opcoes.setAttribute("style", `display: none;`); 
        jogar.setAttribute("style", `display: block;`);
        configurar.innerText = "Configurar";
        ativar = true; 
    } 

}
function jogar(){
    window.scrollTo({
        top: 1600,
        left: 0,
        behavior: "instant"
    })
}

// ========== PAUSA, DESPAUSA, FIM E INÍCIO DE JOGO ==========
function pausar(){
    speed = false;
    spd = 0;
    circulo.posX = met_contX - circulo.width / 2;
    circulo.posY = met_contY - circulo.height / 2;
    spd = 12;
}
function despausar(){
    speed = true;
    resultado.innerHTML = "";
    circulo.display = "block";
}
function parar() {
    const pausa = document.getElementById("pausa");
    const despausa = document.getElementById("despausa");
    const resultado = document.getElementById("resultado");
    if (v1 == 3) {
        resultado.innerHTML = "Jogador 2 venceu!";
        pausar();
        v1 = 0;
        v2 = 0;
    } else if (v2 == 3) {
        resultado.innerHTML = "Você venceu!";
        pausar();
        v1 = 0;
        v2 = 0;
    }
    if (speed == false) {
        pausa.setAttribute("style", `display: none;`);
        despausa.setAttribute("style", "display: flex");
        circulo.speed = 0;
        raqueteUm.speed = 0;
        ponto1.innerHTML = 0;
        ponto2.innerHTML = 0;
    }
    if (speed == true) {
        despausar();
        // pausa.setAttribute("style", `display: flex;`);
        despausa.setAttribute("style", "display: none");
        circulo.speed = spd;
        raqueteUm.speed = spd;
    }
}

let spd_start = spd;
function pontuacao() {
    let ponto1 = document.getElementById("ponto1");
    let ponto2 = document.getElementById("ponto2");
    if(circulo.posX < 23) {
        v1 += 1;
        ponto2.innerHTML = v1;
    }
    if(circulo.posX > 2314 - circulo.width - 35){
        v2 += 1;
        ponto1.innerHTML = v2;
    }
}

// ========== CONTEÚDO ==========
// CONTAINER
function caixa() {
    const cont = document.getElementById("container");
    cont.setAttribute(
        "style", `width: ${container.width}vw; 
        height: ${container.height}vh`
    )        
}
// RAQUETES
function raquete1() {
    const raq1 = document.getElementById("raquete1");
    const corRaq = document.getElementById("cfg3_txt").value;

    raqueteUm.height = parseInt(document.getElementById("cfg1_txt").value / 3);
    raqueteUm.posY += raqueteUm.speed * raqueteUm.direcaoY;
    raqueteUm.width = 10;

    raq1.setAttribute(
        "style", `
        width: ${raqueteUm.width}px; 
        height: ${raqueteUm.height}vh; 
        top: ${raqueteUm.posY}px;
        left: ${raqueteUm.posX}px;
        background-color: ${corRaq};
        `
    )    
}
function mover(){
    raqueteUm.direcaoY *= -1;
}
function raquete2() {
    const raq2 = document.getElementById("raquete2");
    const corRaq = document.getElementById("cfg3_txt").value;

    raqueteDois.width = 10;
    raqueteDois.height = parseInt(document.getElementById("cfg1_txt").value / 3);    

    if (raqueteDois.posY + raqueteDois.height / 2 > circulo.posY + circulo.height / 2) {
        raqueteDois.posY -= raqueteUm.speed * speed * 0.8;
    } else raqueteDois.posY += raqueteUm.speed * speed * 0.8;
    
    if (raqueteDois.posY + raqueteDois.height > 1040) {
        raqueteDois.posY = 1040 - raqueteDois.height -5;
    }
    
    raq2.setAttribute(
        "style", `width: ${raqueteDois.width}px; 
        height: ${raqueteDois.height}vh; 
        top: ${raqueteDois.posY}px;
        right: ${raqueteDois.posX}px;
        background-color: ${corRaq};
        `
    )    
}

// BOLA
function bola(){
    const corBola = document.getElementById("cfg4_txt").value;
    circulo.width = parseInt(document.getElementById("cfg2_txt").value);
    circulo.height = parseInt(document.getElementById("cfg2_txt").value);

    // DESLOCAMENTO DA BOLA
    circulo.posX += circulo.speed * circulo.direcaoX * 1.3;
    circulo.posY += circulo.speed * circulo.direcaoY * 1.3;

    // ATRIBUTOS DA BOLA
    esfera.setAttribute(
        "style", `left: ${circulo.posX}px; 
        top: ${circulo.posY}px; 
        width: ${circulo.width}px; 
        height: ${circulo.height}px;
        background-color: ${corBola};
        display: ${circulo.display};
        `
    );
}
function colisaoNormal() {
    // CASO A BOLA ATINJA UMA DAS EXTREMIDADES HORIZONTAIS
    if (circulo.posX < 5 || circulo.posX > 2304 - circulo.width - 10){
        circulo.posX = met_contX - circulo.width / 2;
        circulo.direcaoX *= -1;
    }
    // CASO A BOLA ATINJA UMA DAS EXTREMIDADES VERTICAIS
    if (circulo.posY < 2 || circulo.posY > 1040 - circulo.height - 10){
        circulo.direcaoY *= -1;
    }
    // CASO A RAQUETE 1 ATINJA UMA DAS EXTREMIDADES VERTICAIS
    if (raqueteUm.posY < 0 || raqueteUm.posY > 1040 - raqueteUm.height - 5){
        raqueteUm.direcaoY *= -1;
    }
    // CASO A RAQUETE 1 ULTRAPASSE O LIMITE
    if(raqueteUm.posY + raqueteUm.height * 17.3 > 1035){
        raqueteUm.direcaoY *= -1;
        raqueteUm.posY = 1035 - raqueteUm.height * 18.3;
    }
    if(raqueteUm.posY < 0){
        raqueteUm.height += 5*speed;
    }
    // CASO A RAQUETE 2 ULTRAPASSE O LIMITE
    if(raqueteDois.posY + raqueteDois.height * 17.3 > 1040){
        raqueteDois.posY = 1040 - raqueteDois.height * 18.3;
    }
    if(raqueteDois.posY < 0){
        raqueteDois.posY = 0;
    }
}
function colisaoBolaRaq() {
    // ATIVA E DESATIVA AS COLISÕES 
    let ativar = "";
    if (circulo.direcaoX < 0) {
        ativar = true
    } else ativar = false;

    // COLISÃO BOLA-RAQUETE 1
    if ((circulo.posX < raqueteUm.posX + raqueteUm.width && circulo.posX + circulo.width > raqueteUm.posX) && (circulo.posY < raqueteUm.posY + raqueteUm.height * 17.3 && circulo.posY + circulo.height > raqueteUm.posY) && ativar == true) {
        circulo.direcaoX *= -1;
        spd += 0.25;
    }
    // COLISÃO BOLA-RAQUETE 2
    if ((2304 - circulo.posX - circulo.width - (2 * raqueteDois.width) < raqueteDois.posX && circulo.posX < 2304 - raqueteDois.posX + raqueteDois.width) &&  (circulo.posY < raqueteDois.posY + raqueteDois.height * 17.3 && circulo.posY + circulo.height > raqueteDois.posY) && ativar == false) {
        circulo.direcaoX *= -1;
        spd += 0.25;
    }
    if (spd > 24) {
        spd = 24;
    }
}


// EXECUTAR
setInterval(() => {
    caixa();
    raquete1();
    raquete2();
    bola();
    colisaoNormal();
    colisaoBolaRaq();
    pontuacao();
    parar();
}, 1000/120);
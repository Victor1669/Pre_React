setInterval(() => {
    document.documentElement.style.setProperty('--bolaSize', `${ballSize}px`);
    document.documentElement.style.setProperty("--contWidth", `${contWidth}px`)
}, 1000/30);

const bat1 = new Div("black", 10, 150).criar("Raquete_1", "raquete");
let raq1 = document.getElementById("Raquete_1");

const bat2 = new Div("black", 10, 150).criar("Raquete_2", "raquete");
let raq2 = document.getElementById("Raquete_2");

const esf1 = new Div().criar("bola_1", "bola");
let bola = document.getElementById("bola_1");

const container1 = new Div("gray").criar("cont_1", "container");
let cont = document.getElementById("cont_1");
cont.appendChild(raq1);
cont.appendChild(raq2);
cont.appendChild(bola);
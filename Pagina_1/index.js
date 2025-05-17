// ===== MENU =====
let ativo = true;
let lista = document.getElementById("lista");
function menu() {
    if (ativo == true) {
        lista.setAttribute("style", `
            transition: 0.5s;
            translate: -17vw 0;
            display: grid;
        `)
        document.body.setAttribute("style", `
            opacity: 0.9;
        `)
        ativo = false;
    } else {
        lista.setAttribute("style", `
            transition: 0.5s;
            translate: 17vw 0;
        `)
        document.body.style.opacity = 1;
        ativo = true;
    }
}

// ===== DATA =====
setInterval(() => {
    let date = new Date();
    document.body.getElementsByTagName("h1")[0].innerText = `${date.toLocaleString("pt-br", {dateStyle: 'full'})}`;
    document.body.getElementsByTagName("h2")[0].innerText = `${date.toLocaleTimeString("pt-br")}`;
    window.scrollTo(0, 0)
}, 1000);

let tela = document.getElementById("tela");
let calculo = document.getElementById("calculo");

function digitar(digito){
    tela.value += digito;
}
function calcular() {
    let calc = (eval(tela.value)).toString();
    tela.value = calc.slice(0, 12);
}
function limpar(){
    tela.value = "";
}

tela.addEventListener("keypress", function(tecla) {    
    if (tecla.key == "Enter") {
        calculo.click();
    }
})
// let valor1, valor2;

// for (let i = 0; i < 2; i++) {
//     valor1 = prompt("Digite seu nome:");
//     valor2 = prompt("Digite sua idade:");
//     document.getElementsByTagName("p")[0].innerText += `Pessoa ${i}: \nnome: ${valor1};\nidade: ${valor2}.\n\n`;
// }

let numero = prompt("Digite um número:");
let index = prompt("Digite o limite da tabuada");
for (let i = 0; i <= index; i++) {
    document.getElementsByTagName("p")[0].innerText += `${numero} x ${i} = ${numero * i}\n`;
}
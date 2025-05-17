let principal = document.getElementsByClassName("main")[0];
let tarefas = document.getElementsByClassName("tarefas")[0];
let concluidas = document.getElementsByClassName("concluidas")[0];
let apagar = document.getElementById("apagar");

let id = 0;

function adicionar(){
    id += 1;
    let texto = document.getElementById("textoP").value;
    let tarefa = `
    <div id="tarefa${id}" class="tarefa normal">
        <input type="checkbox" id="desconcluir${id}" onclick="concluir(${id})">
        <p id="texto${id}" class="textoP2">${texto}</p>
        <button onclick="remover(${id})" id="apagar">Apagar</button>
    </div>`
    if (texto == "") {
        tarefa = "";
        texto = "Digite algo.";
    } else tarefas.innerHTML += tarefa;
}
function remover(tarefa){
    document.getElementById(`tarefa${tarefa}`).remove()
}

function concluir(input) {
    let tarefa = document.getElementById(`tarefa${input}`);

    tarefa.classList.remove("normal");
    tarefa.classList.add("clicado");
    ativo = true;

    concluidas.appendChild(tarefa);
    tarefa.removeChild(document.getElementById(`desconcluir${input}`));
}
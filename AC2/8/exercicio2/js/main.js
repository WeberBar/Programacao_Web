//Vitor Hugo Weber Barbosa RA: 235320
let butao = document.getElementsByTagName('button');
let tarefaAdicionar = document.getElementById('tarefa');
let lista = document.getElementsByTagName('ol');
let tarefasAdicionadas = [];


butao[0].addEventListener('click', function(event){
    
    let valor = tarefaAdicionar.value;
    tarefasAdicionadas.push(valor);

    for (let index = 0; index < tarefasAdicionadas.length; index++) {
        let tarefa = document.createElement('li');
        tarefa.innerText = tarefaAdicionar.value;
        lista[0].appendChild(tarefa);
        tarefaAdicionar[0].value = ' ';
    }
    
});
//Vitor Hugo Weber Barbosa RA: 235320

let botao = document.getElementsByTagName('button');
let numeradorContador = document.getElementsByTagName('h1');

botao[0].addEventListener('click', function(event){

    numeradorContador[0].textContent ++;
});
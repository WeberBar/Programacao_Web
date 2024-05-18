//Vitor Hugo Weber Barbosa RA: 235320

let paragrafo = document.getElementsByTagName('textarea');
let contador = document.getElementsByTagName('h2');

paragrafo[0].addEventListener('input', contarPalavaras);
    function contarPalavaras(){
    let text = paragrafo[0].value.trim().split('').filter(word => word !== ' ');
    let quantPalavras = 0; 

    for (let index = 0; index < text.length; index++) {
         quantPalavras ++;
        
    }
    contador[0].textContent = quantPalavras;
    quantPalavras = 0;
}
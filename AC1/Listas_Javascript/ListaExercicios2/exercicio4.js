/*     
    4.	Crie um array de números e filtre apenas os números pares.
    Em seguida, mapeie esses números para o dobro de seus valores.
 */

const gerarListaDeNumeros = () => {
    let listaGerada = [];
    for (let i = 0; i <= 30; i++){
        listaGerada.push(i);
    }
    return listaGerada;
};

let listaNumerosPares = gerarListaDeNumeros().filter(numero =>{
    return numero % 2 == 0;
});
let listaComDobro = listaNumerosPares.map(numero => {
    return numero * 2;
});

console.log("-------------------------");
console.log("====== EXERCICIO 4 ======");
console.log("-------------------------");
console.log("Lista dos 30 números:");
console.log(gerarListaDeNumeros());
console.log("Lista dos números pares:");
console.log(listaNumerosPares);
console.log("Lista dos números em dobro:");
console.log(listaComDobro);
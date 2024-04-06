/*
10.	Crie um array de números e filtre apenas os números divisíveis por 3.
Em seguida, mapeie esses números para o quadrado de seus valores.
*/

let listaDeNumeros = [
    56, 23, 89, 42, 17, 74, 31, 95, 10, 5,
    68, 37, 82, 12, 63, 28, 50, 91, 3, 79,
    14, 60, 45, 71, 8, 34, 69, 21, 97, 39
];

let listaDivisivelPorTres = listaDeNumeros.filter(numero => {
    return numero % 3 == 0;
})

let listaQuadrado = listaDivisivelPorTres.map(numero => {
    return Math.pow(numero, 2);
})
console.log(listaDivisivelPorTres)
console.log(listaQuadrado)


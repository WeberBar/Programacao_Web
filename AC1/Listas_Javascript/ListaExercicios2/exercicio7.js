/*
7.	Crie uma classe Carro com os atributos marca e ano.
Crie um array de objetos Carro e encontre o primeiro carro da marca "Toyota" e filtre os carros fabricados após 2010.

*/

class Carro {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
}

let carro1 = new Carro("Nissan", 2017);
let carro2 = new Carro("Tesla", 2024);
let carro3 = new Carro("Hyunday", 2021);
let carro4 = new Carro("Mercedes-Benz", 2004);
let carro5 = new Carro("FIAT", 1983);
let carro6 = new Carro("Toyota", 2002);
let carro7 = new Carro("Volkswagen", 2018);
let carro8 = new Carro("Chevrolet", 2021);
let carro9 = new Carro("Ford", 2020);
let carro10 = new Carro("Honda", 2009);

let listaCarros = [carro1, carro2, carro3, carro4, carro5, carro6, carro7, carro8, carro9, carro10];
let carroProcurar = "Toyota";
let listaFiltrada = listaCarros.find(carro => {
    return carro.marca == carroProcurar;
});

let filtaCarros = listaCarros.filter(carro =>{
    return carro.ano > 2010;
})

let indexDoElemento = (listaCarros, nome) => {
    let element;
    for (let index = 0; index < listaCarros.length; index++) {
        if (nome == listaCarros[index].marca) {
            element = index;
        }
    }
    return element;
}

console.log("-------------------------");
console.log("====== EXERCICIO 7 ======");
console.log("-------------------------");
console.log(listaFiltrada);
console.log("indice: " + indexDoElemento(listaCarros, carroProcurar));
console.log("-----------//------------");
console.log("Carros fabricados após 2010:");
console.log(filtaCarros);

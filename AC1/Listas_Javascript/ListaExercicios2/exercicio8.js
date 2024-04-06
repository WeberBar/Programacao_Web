/*
8.	Crie uma classe Produto com os atributos nome e preco. 
Crie um array de objetos Produto e mapeie esses produtos para um novo array com os preços aumentados em 10%.
*/

class Produto {
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }
}

let produto1 = new Produto("Camiseta", 25.99);
let produto2 = new Produto("Calça Jeans", 49.99);
let produto3 = new Produto("Tênis", 79.99);
let produto4 = new Produto("Relógio", 99.99);
let produto5 = new Produto("Óculos de Sol", 39.99);

let listaProdutos =  [produto1, produto2, produto3, produto4, produto5];

let novaListaProdutos = listaProdutos.map(produto =>{return new Produto (produto.nome,((produto.preco * 0.1) + produto.preco).toFixed(2))});

console.log(listaProdutos);
console.log(novaListaProdutos);

/*
9.	Utilizando a classe Produto, encontre o primeiro produto
com preço superior a R$ 100,00 e altere o nome desse produto para "Produto Caro". 
*/
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

let produto1 = new Produto("Camiseta", 50.99);
let produto2 = new Produto("Calça Jeans", 20.50);
let produto3 = new Produto("Tênis", 101.00);
let produto4 = new Produto("Relógio", 99.99);
let produto5 = new Produto("Óculos de Sol", 200.25);

let listaProdutos = [produto1, produto2, produto3, produto4, produto5];
let produtoCaro = listaProdutos.find(produto => {
    return produto.preco > 100;
});
console.log(listaProdutos);
let novaListaProdutos = [];

for(let i = 0; i < listaProdutos.length; i++){
    if(listaProdutos[i] == produtoCaro){
        novaListaProdutos[i] = new Produto("Produto Caro", listaProdutos[i].preco); 
    }else{
        novaListaProdutos[i] = listaProdutos[i];
    }
}
console.log(novaListaProdutos);
/*

6.	Crie uma classe Livro com os atributos titulo e paginas. 
Crie um array de objetos Livro e filtre os livros com mais de 300 páginas.

*/

class Livro {
    constructor(titulo, qtdPaginas) {
        this.titulo = titulo;
        this.qtdPaginas = qtdPaginas;
    }
}

let livro1 = new Livro("Dom Casmurro", 256);
let livro2 = new Livro("O Senhor dos Anéis", 1200);
let livro3 = new Livro("1984", 328);
let livro4 = new Livro("Harry Potter e a Pedra Filosofal", 352);
let livro5 = new Livro("Orgulho e Preconceito", 416);
let livro6 = new Livro("Cem Anos de Solidão", 417);
let livro7 = new Livro("A Revolução dos Bichos", 144);
let livro8 = new Livro("O Pequeno Príncipe", 96);
let livro9 = new Livro("A Culpa é das Estrelas", 313);
let livro10 = new Livro("Memórias Póstumas de Brás Cubas", 240);

let listaLivros = [livro1, livro2, livro3, livro4, livro5, livro6, livro7, livro8, livro9, livro10];

let filtragemDosLivros = listaLivros.filter(livro => {
    return livro.qtdPaginas > 300;
});



console.log("-------------------------");
console.log("====== EXERCICIO 6 ======");
console.log("-------------------------");
console.log("Lista dos livros:");
console.log(listaLivros);
console.log("Lista dos livros com mais de 300 páginas:");
console.log(filtragemDosLivros);
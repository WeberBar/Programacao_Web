/*

1.	Crie uma classe Usuario com os atributos nome e idade. Em seguida,
crie um array de objetos Usuario e crie um novo array apenas com os nomes dos usuários em letras maiúsculas.
Faça um programa que mostre os números impares em um intervalo de 0 a 100.

*/

class Usuario {
    
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

let usuario1 = new Usuario("Fabiano", 46);
let usuario2 = new Usuario("Nicolas", 15);
let usuario3 = new Usuario("João", 65);
let usuario4 = new Usuario("Julia", 24);

let listaUsuarios = [usuario1, usuario2, usuario3, usuario4];
let listaUsuariosUpper = listaUsuarios.map((usuario) => { return usuario.nome.toUpperCase() });

const mostrarNumerosImpares = () => {
    for (let i = 0; i < 100; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
console.log("-------------------------");
console.log("====== EXERCICIO 1 ======");
console.log("-------------------------");
console.log(listaUsuarios);
console.log("-------------------------");
console.log(listaUsuariosUpper);
console.log("-------------------------");
mostrarNumerosImpares();
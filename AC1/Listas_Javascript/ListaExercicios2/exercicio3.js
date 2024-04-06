// 3.	Utilizando a classe Usuario, encontre o primeiro usuário com idade entre 25 e 30 anos.

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
let usuario5 = new Usuario("Thomas", 11);
let usuario6 = new Usuario("Jhonatan", 12);
let usuario7 = new Usuario("Vitor", 26);
let usuario8 = new Usuario("Cristina", 29);


let listaUsuarios = [usuario1, usuario2, usuario3, usuario4, usuario5, usuario6, usuario7, usuario8];

let primeiroUsuario = listaUsuarios.find(usuario => {
    return usuario.idade > 25 && usuario.idade <30;
});

console.log("-------------------------");
console.log("====== EXERCICIO 3 ======");
console.log("-------------------------");
console.log(primeiroUsuario);
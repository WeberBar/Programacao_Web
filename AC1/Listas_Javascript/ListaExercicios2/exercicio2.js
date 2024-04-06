// 2.	Continuando com a classe Usuario, filtre os usuários com idade superior a 18 anos.
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
let usuario7 = new Usuario("Vitor", 20);
let usuario8 = new Usuario("Cristina", 9);


let listaUsuarios = [usuario1, usuario2, usuario3, usuario4, usuario5, usuario6, usuario7, usuario8];

let usuariosFiltrados = listaUsuarios.filter(usuario => {
    return usuario.idade > 18;
});
console.log("-------------------------");
console.log("====== EXERCICIO 2 ======");
console.log("-------------------------");
console.log(usuariosFiltrados);
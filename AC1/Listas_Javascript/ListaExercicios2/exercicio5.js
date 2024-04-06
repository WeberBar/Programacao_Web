/*
5.	Crie uma classe Animal com os métodos emitirSom e correr. 
Crie subclasses Cachorro e Gato que herdam de Animal e implementam o método emitirSom de forma diferente para cada classe.
*/

class Animal {

    emitirSom;
    correr(){
        console.log("correndo");
    }
};

class Cachorro extends Animal{
    
    emitirSom = () => {
        console.log("au-au");
    }
};

class Gato extends Animal{

    emitirSom = () => {
        console.log("miau-miau");
    }
};

cachorro = new Cachorro();
gato = new Gato();


console.log("-------------------------");
console.log("====== EXERCICIO 5 ======");
console.log("-------------------------");
console.log("CACHORRO:");
cachorro.emitirSom();
cachorro.correr();
console.log("GATO:");
gato.emitirSom();
gato.correr();
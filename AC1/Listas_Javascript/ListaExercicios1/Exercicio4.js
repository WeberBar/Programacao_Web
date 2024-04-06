let nome = "Edson Martin Feitosa";

let obterPrimeiroNome = nome.indexOf(' ');
let primeiroNome = nome.substring(0, obterPrimeiroNome).toLowerCase();

let obterUltimoNome = nome.lastIndexOf(' ');
let ultimoNome = nome.substring(obterUltimoNome + 1).toLowerCase();


let geracaoEmailFacens = primeiroNome + '.' + ultimoNome + '@facens.br';

console.log("Email FACENS gerado é: " + geracaoEmailFacens );





function gerarDobro(numero) {
   if (numero === 0) {
    return "Só é aceito números positivos maiores que zero";
   } else {
        const dobrando = numero * 2;
        return dobrando;
   }
}


console.log(gerarDobro(0));

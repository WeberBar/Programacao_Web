


function verificaVogal(string) {
 
    const vogais = 'aeiou';
    let contador = 0;
    string = string.toLowerCase();
   
    for (let i = 0; i < string.length; i++) {
        if (vogais.includes(string[i])) {
          contador++;
        }
      }
    
      return contador;

}

console.log(verificaVogal("EUSOUALUNOFACENS"));

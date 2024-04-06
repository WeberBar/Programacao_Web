


function palindromo(String) {
    let invertString =  String.split('').reverse().join('');

    if (String == invertString) {
        return "É um Palindromo"
    } else {
        return "Não é um Palindromo"
    }
}

console.log(palindromo("arara"));

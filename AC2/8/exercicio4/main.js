//Vitor Hugo Weber Barbosa RA: 235320

let campos = document.getElementsByTagName('input');
let soma = document.getElementById('soma');
let subtracao = document.getElementById('subtracao');
let divisao = document.getElementById('divisao');
let multiplicacao = document.getElementById('multiplicacao');

soma.addEventListener('click', function (event) {
    if (campos[0].value === '' || campos[1].value === '') {
        alert('Digite um numero nos campos')
    } else {
        let resultado = Number.parseInt(campos[0].value) + Number.parseInt(campos[1].value);
        alert(`O resultado da soma do ${campos[0].value} com o ${campos[1].value} é `.concat(resultado))
        campos[0].value = ' ';
        campos[1].value = ' ';
    }
});

subtracao.addEventListener('click', function (event) {
    if (campos[0].value === '' || campos[1].value === '') {
        alert('Digite um numero nos campos')
    } else {
        let resultado = Number.parseInt(campos[0].value) - Number.parseInt(campos[1].value);
        alert(`O resultado da subtração do ${campos[0].value} com o ${campos[1].value} é `.concat(resultado))
        campos[0].value = ' ';
        campos[1].value = ' ';
    }
});

multiplicacao.addEventListener('click', function (event) {
    if (campos[0].value === '' || campos[1].value === '') {
        alert('Digite um numero nos campos')
    } else {
        let resultado = Number.parseInt(campos[0].value) * Number.parseInt(campos[1].value);
        alert(`O resultado da multiplicação do ${campos[0].value} com o ${campos[1].value} é `.concat(resultado))
        campos[0].value = ' ';
        campos[1].value = ' ';
    }
});

divisao.addEventListener('click', function (event) {
    console.log(campos[1].value)
    
        if (campos[0].value == 0 || campos[1].value == 0) {
            alert('Impossível dividir por zero');
        } else {
            let resultado = Number.parseInt(campos[0].value) / Number.parseInt(campos[1].value);
            alert(`O resultado da divisão do ${campos[0].value} com o ${campos[1].value} é `.concat(resultado));
        }
        campos[0].value = ' ';
        campos[1].value = ' ';
    
});




//Vitor Hugo Weber Barbosa RA: 235320

let painelDeCor = document.getElementById('painel-color');
let botaoMudarCor = document.getElementsByTagName('button');
let listaDeCor = ['#00008B','#6A5ACD', '#00FFFF','#2F4F4F','#FFDEAD', '#FF1493', '#DC143C', '#FFFF00', '#FFFFFF'];
botaoMudarCor[0].addEventListener('click', function(event){
    painelDeCor.style.backgroundColor = listaDeCor[Math.floor(Math.random() * (10- 0) + 0)];
    
})
console.log(painelDeCor);
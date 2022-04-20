const botaoAtu = document.getElementById('botao');
const caixaEscrita = document.getElementById('input');
let cor = 'white';

function backColor (){
    botaoAtu.addEventListener('click', () => {
        let corpo = document.querySelector('body');
        if(caixaEscrita.value !== cor ){
            corpo.style.backgroundColor = caixaEscrita.value
        }else{
            corpo.style.backgroundColor = cor; 
        } 
    });
}
backColor();
const pegaBotao = document.getElementById('botao');
pegaBotao.addEventListener('click', tirarEfeito);
function tirarEfeito(){
    event.preventDefault();
}
let pegaInputs = document.querySelectorAll('input');
const pegaLimpeza = document.querySelector('#limpeza');
let pegaAreaTxt = document.querySelector('#box-text') 
pegaLimpeza.addEventListener('click',limpaCampos);

function limpaCampos(){
    tirarEfeito();
    for(let passa = 0; passa < pegaInputs.length; passa += 1){
        if(pegaInputs[passa].value !== '' || pegaInputs[passa].checked === true || pegaAreaTxt.value !== ''){
            pegaInputs[passa].value = '';
            pegaInputs[passa].checked = false;
            pegaAreaTxt.value = '';
        }
    }
}

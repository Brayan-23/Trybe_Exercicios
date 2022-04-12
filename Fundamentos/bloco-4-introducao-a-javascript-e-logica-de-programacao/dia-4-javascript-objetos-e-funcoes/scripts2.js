//Exercicio 01
function verificPoli(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  console.log(verificPoli('macaco'));
  console.log('-----------------------------');
  //Exercicio 02
  let coisas =[1, 4, 10, 20, 12, -5];
  function maiorValor(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
    return indiceMaior;
  }
  
  console.log(maiorValor(coisas));
  console.log('-------------------------------');
  //Exercicio 03
  function menorValor(numeros) {
    let indiceMenor= 0;
    for (let indice in numeros) {
      if (numeros[indiceMenor] > numeros[indice]) {
        indiceMenor = indice;
      }
    }
    return indiceMenor
    }
    console.log(menorValor(coisas)); 
    console.log('-------------------------------');
    // Exercicio 04
    let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
    function maisCaracters (big){
        let result = big[0];
        for(let maior in big){
            if(big[maior].length > result.length){
                result = big[maior]
            }
        }
        return result;
    }
console.log(maisCaracters(nomes));
console.log('-----------------------------------');
//Exercicio 05



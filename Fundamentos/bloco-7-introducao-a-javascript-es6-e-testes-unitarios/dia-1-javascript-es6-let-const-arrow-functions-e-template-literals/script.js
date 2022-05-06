const funcao = escopo => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope =`${ifScope} ótimo, fui utilizada no escopo`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

 funcao(false);
// Segunda Parte 
 const oddsAndEvens = [13, 3, 4, 10, 7, 2];

 const ordenados = [
     oddsAndEvens[0] = 2,
     oddsAndEvens[1] = 3,
     oddsAndEvens[2] = 4,
     oddsAndEvens[3] = 7,
     oddsAndEvens[4] = 10,
     oddsAndEvens[5] = 13,
 ]

 console.log(`Os números ${ordenados} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
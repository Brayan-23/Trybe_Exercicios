
const a = 10;
const b = 5;
const c = 3;
const valor = -3;
const angulo1 = 45;
const angulo2 = 90;
const angulo3 = 45;
const chess = 'queen'
const porcentagem = 76;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));


if(a>b) {
    console.log('a é maior que b.')
}else {
    console.log('b é maior que a.')
}


if (a > b && a > c) {
  console.log('O maior número é: a = 10');
} else if (b > a && b > c) {
  console.log('O maior número é: b = 5');
} else {
  console.log('O maior número é: c = 3');
}



if(valor > 0) {
    console.log('Positive');
}else if (valor <0) {
    console.log('Negative');
}else {
    console.log('zero');
}

let somaAngulos = angulo1 + angulo2 + angulo3;

let allAnglesArePositives = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if(allAnglesArePositives){
  if (somaAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}


switch( chess){
    case 'king':
        console.log('King - move-se apenas uma casa em todas as direções.')
        break;
    case 'queen':
        console.log('Queen - move-se quantas casas quiser para todos as direções.')
        break;
    case 'tower':
        console.log('Tower - move-se para os lados e para frente quantas casas quiser.')
        break;
    case 'horse':
        console.log('Horse - move-se em L.')
        break;
    case 'bispo':
        console.log('Bispo - move-se nas diagonais.')
        break;
    case 'pião':
        console.log('Pião - move-se apenass para frente.')
        break;
        default:
            console.log('Peça inválida.')
            break;
}


if (porcentagem < 0 || porcentagem > 100) {
  console.log("Erro, nota incorreta!");
} else if (porcentagem >= 90) {
  console.log("A");
} else if (porcentagem >= 80) {
  console.log("B");
} else if (porcentagem >= 70) {
  console.log("C");
} else if (porcentagem >= 60) {
  console.log("D");
} else if (porcentagem >= 50) {
  console.log("E");
} else {
  console.log("F");
}


let isEven = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
};
console.log(isEven);



const createNameEmail = (palavra) => {
    const nome = palavra.replace(/ /g, '_');
    const email = `${nome}@trybe.com`;
    const result = {
        name: palavra,
        email: email,
    }
    return result;
}

const newEmployees = () => {
    const employees = {
      id1: createNameEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: createNameEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: createNameEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return pegaobj;
  };
// Parte 02
const result = (numero, sort) => numero === sort;
const creatSorteio = (myNumber, action) => {
    const number = Math.floor(Math.random() * 5) + 1;
    return action(myNumber, number) ? 'Parabens você ganhou' : 'Tente Novamente';
}
// Parte 03
const checagem = (box, verific) => {
    if(box === verific){
       return 1
    } if(verific === 'N.A'){
        return 0;
    }
 return -0,5;
};

const resultado = (box, verific, action) => {
let result = 0;
for(let i = 0; i < box.length; i += 1){
    const test = action(box[i], verific[i])
    result += test;
}
return `Você obteve ${result}`;
}




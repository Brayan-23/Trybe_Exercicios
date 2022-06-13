let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;
// Exercicio 2
for(let numb = 0; numb < numbers.length; numb += 1) {
  total += numbers[numb];
}
// Exercicio 3
let result = total/numbers.length
// Exeercicio 4
console.log(result)

if(result > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}
// Exercicio 5
let maxNumber = numbers[0];
for(let numb = 0; numb < numbers.length; numb += 1){
    if(numbers[numb] > maxNumber){
        maxNumber = numbers[numb];
    }
}
console.log(maxNumber);

 // Exerciccio 6
let impares = 0;
for(let numb = 0; numb < numbers.length; numb += 1){ if ( numbers[numb] % 2 !== 0 ){
    impares += 1
    }    
}
if ( impares === 0){
    console.log('Nenhum valor ímpar encontrado');
}else{
    console.log(impares);
}
// Exercicio 7
let minNumber = numbers[0];
for(let numb = 0; numb < numbers.length; numb += 1){
    if(numbers[numb] < minNumber){
        minNumber = numbers[numb];
    }
}
console.log(minNumber);
 // Exercicio 8
 let array = [];
 for(index = 0; index <= 25; index += 1){
    array.push(index);
}
console.log(array);
// Exerciccio 9
    for(index = 0; index <= array.length; index += 1){
        console.log(array[index] / 2);
}

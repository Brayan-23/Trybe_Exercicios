// Exercicio 01
let fatorial = 10;
let result =fatorial
for(let fat = 1; fat < fatorial; fat +=1){
    result *= fat   
}
console.log(result);

// Exercicio 02
let word = 'tryber';
let gelo = "";
for(let i = 0; i <= word.length; i +=1) {
    gelo += word.charAt(word.length-i);
}
console.log(gelo);

// Exercicio 03
let array = ['java', 'javascript', 'python', 'html', 'css'];
let larger = "";
let smaller = "front";
for( i = 0; i < array.length; i += 1){
    if(array[i].length > larger.length ){
        larger = array[i]
    }
}
console.log(larger)


for( i = 0; i < array.length; i += 1){
    if(array[i].length < smaller.length ){
        smaller = array[i]
    }
}
console.log(smaller)

// Exercicio 04
let resul = 0;
for(i = 0; i <= 50; i +=1){
    if( i % 1 === 0 && i % i === 0 && i % 2 !== 0) {
        if( i > resul){
            resul = i
        }
    }
}
console.log(resul)

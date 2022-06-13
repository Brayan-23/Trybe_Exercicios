const uppercase = require('/home/brayan/Trybe_Exercicios/front-end/bloco-9-javascript-e-testes-assincronos/dia-1-javascript-assincrono-e-callbacks/script.js');

it('Test uppercase', (done) => {
    uppercase('nada', (str) => {
        try{
            expect(str).toBe('NADA')
            done() 
        } catch(error){
            done(error)
        }
    });
});
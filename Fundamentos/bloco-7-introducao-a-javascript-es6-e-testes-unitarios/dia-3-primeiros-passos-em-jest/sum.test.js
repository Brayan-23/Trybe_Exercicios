const {sum, myRemove, myFizzBuzz} = require('./sum');

describe ('Testes referentes a função sum', () => {
    it('Return result 4 + 5 is 9', () =>{
        expect(sum(4, 5)).toBe(9);
    })
    it('Return result 0 + 0 is 0', () =>{
        expect(sum(0, 0)).toBe(0);
    })
    it('Return result 4 + "5" is Error', () =>{
        expect(() => sum(4, "5")).toThrow(Error);
    })
    it('Return result 4 + "5" is parameters must be numbers', () =>{
        expect(() => sum(4, "5")).toThrow('parameters must be numbers');
    })
});
//Parte 02
describe('Testes referentes a função myRemove', () => {
    it('Verefica se  [1, 2, 3, 4], 3 retorna ele mesmo', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });

    it('Verefica se [1, 2, 3, 4], 3 não retorna [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    it('Verefica se [1, 2, 3, 4], 5 não retorna [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});
describe('Testes referentes a função myFizzBuzz', () => {
    it('Vereifica se o número divisivel 3 e 5', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    });
    it('Vereifica se o número divisivel 3 apenas', () => {
        expect(myFizzBuzz(9)).toBe('fizz')
    });
    it('Vereifica se o número não é divisivel nem 3 ou 5', () => {
        expect(myFizzBuzz(16)).toBe(16);
    });
    it('Verifica se é um número', () => {
        expect(myFizzBuzz('5')).toBeFalsy();
    });
})
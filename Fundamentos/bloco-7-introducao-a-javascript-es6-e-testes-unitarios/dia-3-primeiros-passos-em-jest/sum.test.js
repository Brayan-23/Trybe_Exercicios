const sum = require('./sum');

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
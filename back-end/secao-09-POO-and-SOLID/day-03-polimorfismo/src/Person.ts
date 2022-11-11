export default class Person {
    private _name: string;
    private _birthDate: Date;
    
    constructor(name: string, birthDate: Date){
        this._name = name;
        this._birthDate = birthDate;
    }

    get name() {
        return this._name;
    }
    get birthDate() {
        return this._birthDate;
    }

    set name(param: string) {
        this.validateName(param);
    this._name = param;
    }

    set birthDate(date: Date) {
        this.validateBirthDate(date);
        this._birthDate = date;
    }

    static getAge(value: Date): number {
        const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
        const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
        return Math.floor(diff / yearMs);
      }    

    private validateName(name: string): void {
        if(name.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    private validateBirthDate(value: Date): void {
        if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
        if (Person.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
      }
}

const person = new Person('Brayan Santos', new Date('2002/11/29'))
const person2 = new Person('Mathews', new Date('2000/01/01'));

/* console.log(person.birthDate);
person.birthDate = new Date('1980/11/01');
console.log(person.birthDate);
console.log(person)
person.name = 'ab' */

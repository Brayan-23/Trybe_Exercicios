import IEmployee from "./interfaces";
import Person from "./Person";
import Subject from "./Subject";


export default class Teacher extends Person implements IEmployee {
    private _subject: Subject;
    private _registration = String();
    private _salary: number;
    private _admissionDate: Date;

    constructor(nome: string, birthDate: Date, salary: number, subject:Subject ){
        super(nome, birthDate);

        this._subject = subject;
        this._registration = this.generateRegistration();
        this._admissionDate = new Date();
        this._salary = salary;
    }

    get subject(): Subject {
        return this._subject;
    }
    get registration() {
        return this._registration;
    }
    get admissionDate() {
        return this._admissionDate;
    }
    get salary() {
        return this._salary;
    }

    set subject(materia: Subject) {
     this._subject = materia;
    }
    set registration(regis: string) {
        if(regis.length < 16) throw new Error('Deve possuir no minimo 16 caracteres');
         this._registration = regis;
    }
    set admissionDate(date: Date) {
        if (date.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');
     this._admissionDate = date;
    }

    set salary(cash: number) {
        if(cash < 0) throw new Error('Não pode ser menor que zero');
         this._salary = cash;
    }

    generateRegistration(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    
        return `PRF${randomStr}`;
      }
}

const person = new Person('Brayan', new Date('2002/11/29'));
const subject = new Subject('Matematica');
const teacher = new Teacher('Sandra', new Date('1990/12/31'), 1000, subject);

console.log(teacher.registration)
console.log(teacher.name)
console.log(teacher.birthDate)
console.log(teacher.admissionDate)
console.log(teacher.salary);
console.log(teacher.subject);
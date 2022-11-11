import Person from "./Person";

export default class Student extends Person {
    private _enrollment = String();
    private _examsGrades: number[] = [];
    private _worksGrades: number[] = [];

    constructor(name: string, birthDate: Date) {
        super(name, birthDate);
        this._enrollment = this.generateEnrollment();
    }

    get enrollment() {
        return this._enrollment;
    }

    get examsGrades() {
        return this._examsGrades;
    }

    get worksGrades() {
        return this._worksGrades;
    }


    set enrollment(matricula: string) {
        if(matricula.length < 16) throw new Error('Matricula precisa ser maior que 16 caracteres');
     this._enrollment = matricula;
    }

    set examsGrades(notas:number[]) {
        if(notas.length > 4) throw new Error('So é possivel ter 4 notas');
         this._examsGrades = notas;
    }

    set worksGrades(notas: number[]) {
        if(notas.length > 2) throw new Error('So é possivel ter 2 notas');
         this._worksGrades = notas;
    }

    sumGrades(): number {
        const exams =  this.examsGrades.reduce((acc, curr) => acc += curr, 0);
        const works = this.worksGrades.reduce((acc, curr) => acc += curr, 0);
        return exams + works;
    }

    sumAverageGrades() {
        const quantidadeNotas = this.examsGrades.length + this.worksGrades.length;
        return Math.floor(this.sumGrades() / quantidadeNotas);
    }

    generateEnrollment(): string {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    
        return `STU${randomStr}`;
      }
}

const student = new Student('Brayan', new Date('2002/11/29'))

console.log(student.name);
console.log(student.birthDate);
console.log(student.enrollment);
student.examsGrades = [1, 2, 3, 4];
console.log(student.examsGrades);
student.worksGrades = [1, 2];
console.log(student.worksGrades);
console.log(student.sumGrades());
console.log(student.sumAverageGrades());
class School {
    private _matricula: string;
    private _nome: string;
    private _notas:  number[];
    private _trabalhos:number[];

    constructor(mat: string, nome: string, notas: number[], trab: number[]) {
        this._matricula = mat;
        this._nome = nome;
        this._notas = notas;
        this._trabalhos = trab;
        }

        sum() {
           return this._notas.reduce((acc, curr) => acc += curr , 0)
        }

        avg() {
            return this.sum() / this._notas.length
        }
}


const eu = new School('Feita', 'Brayan Santos', [5, 5, 5, 5], [1, 2]);

console.log(eu.sum());
console.log(eu.avg());
export default class Data {
    private _day: number;
    private _month: number;
    private _year: number;

    constructor(d:number, m:number, y:number){
        const dateStr = `${y}-${m}-${d}`;
        
        if (new Date(dateStr).getDate() !== d) {
            this._day = 1;
            this._month = 1;
            this._year = 1900;
          } else {
            this._day = d;
            this._month = m;
            this._year = y;
          }
    }

    get day() {
        return this._day;
    }

    set day(value: number) {
        this._day = value;
      }
    

    get month() {
        return this._month;
    }

    set month(value: number) {
        this._month = value;
      }

    get year() {
        return this._year;
    }

    set year(value: number) {
        this._year = value;
      }

      getMonthName() {
        const months = [
            'janeiro',
            'fevereiro',
            'março',
            'abril',
            'maio',
            'junho',
            'julho',
            'agosto',
            'setembro',
            'outubro',
            'novembro',
            'dezembro',
          ];
          return months[this.month - 1];
      }

      isLeapYear() {
        return this.year % 4 === 0;
      }

}


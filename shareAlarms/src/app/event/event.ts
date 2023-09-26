export class Event {
    id: number;
    description: string;
    datetime: Date;
    recurrente: boolean;
    metodo: string;
    dias: number[];

    constructor(id: number, description: string, date: Date, recurrente: boolean, metodo:string, dias: number[]){
        this.id = id;
        this.description = description;
        this.datetime = date;
        this.recurrente = recurrente;
        this.metodo = metodo;
        this.dias = dias;
    }
}

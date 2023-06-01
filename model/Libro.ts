export class Libro {
    titolo : string;
    autore : string;
    prezzo? : number;
    protected dataCreazione : Date;

    constructor (titolo: string, autore: string); //firma x overload
    constructor (titolo: string, autore: string, prezzo:number);
    constructor (titolo: string, autore: string, prezzo?: number){
        this.titolo = titolo;
        this.autore = autore;
        this.prezzo = prezzo;
        this.dataCreazione = new Date ();
    } //firma constructor completo da mettere sempre

    getInfo() {
        if(this.prezzo === undefined)
            return `${this.titolo} + ${this.autore} + ${this.dataCreazione} + `;
        return `${this.titolo} + ${this.autore} + ${this.prezzo} + ${this.dataCreazione} + `;
    }
}
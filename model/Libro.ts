class Libro {
    titolo : string;
    autore : string;
    prezzo? : number;
    private dataCreazione : Date;

    constructor (titolo: string, autore: string); //firma x overload
    constructor (titolo: string, autore: string, prezzo:number);
    constructor (titolo: string, autore: string, prezzo?: number){
        this.titolo = titolo;
        this.autore = autore;
        this.prezzo = prezzo;
        this.dataCreazione = new Date ();
    } //firma constructor completo da mettere sempre
}


class Libro2 {
    constructor (public titolo2: string, public autore2: string, public prezzo2? : number) {}
}
class LibroDigitale extends Libro {
    constructor (titolo: string, autore: string, kb: number);
    constructor (titolo: string, autore: string, kb: number, prezzo: number);
    constructor (titolo: string, autore: string, public kb: number, prezzo?: number) 
    {
        super (titolo, autore);
        super.prezzo = prezzo;
    }

    override getInfo() {
        return super.getInfo() + this.kb;
    }
}
import { Libro } from "../model/Libro";

export class Libreria { //controller collega view e model
 
    private dati : Libro [] = []; 

    Add(libro : Libro) { this.dati.push(libro); }

    get Elenco(): Libro[] { return this.dati; }

    Cerca(termine: string) : Libro [] {
       return this.dati.filter( l => l.titolo.includes (termine) || l.titolo.includes(termine) );
    }
}
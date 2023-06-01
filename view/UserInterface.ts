import { Libreria } from "../controller/Libreria";
// Importo readline rl oggetto
import * as rl from 'readline-sync'
import { LibroCartaceo } from "../model/LibroCartaceo";
import { Libro } from "../model/Libro";

export class UserInterface {
    private controller: Libreria;

    constructor() {
        this.controller = new Libreria();
    }

    start() {
        while (true) {
            console.log('1 - Inserimento Libro');
            console.log('2 - Elenco Libri');
            console.log('3 - Cerca Libro');
            console.log('');
            console.log('9 - Esci');

            let scelta = rl.questionInt('Inserire la scelta');

            if (scelta == 1) {
                let titolo = rl.question('Titolo:');
                let autore = rl.question('Autore:');
                let pagine = parseInt(rl.question('Pagine:'));
                this.controller.Add(new LibroCartaceo(titolo, autore, pagine));
            }

            if (scelta == 2) {
                this.controller.Elenco.forEach(l => console.log(l.getInfo()));
            }

            if (scelta == 3) {
                let termine = rl.question('Termine da cercare:');
                this.StampaInfo(this.controller.Cerca(termine));
            }
        }
    }


    private StampaInfo(elementi : Libro []): void{
        elementi.forEach(l => console.log(l.getInfo()));
    }

}
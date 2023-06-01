// import { Libro } from "./model/Libro";
import { LibroDigitale } from "./model/LibroDigitale";
import { LibroCartaceo } from "./model/LibroCartaceo";
import { Dvd } from "./model/Dvd";
import { IGetInfo } from "./model/IGetInfo";

// let n = new Libro ("La fabbrica di cioccolato", "Roald Dahl"); non posso istanziarla perchè è una classe abstract
let libreria : IGetInfo [ ] = [ ] ;
libreria.push ( new LibroCartaceo ("I promessi sposi", "Alessandro Manzoni", 400));
libreria.push ( new LibroDigitale ( "Divina Commedia", "Dante Alighieri", 400) );
libreria.push ( new Dvd ("Guerre stellari", "Non mi ricordo"));

libreria.forEach(l => console.log(l.getInfo()));
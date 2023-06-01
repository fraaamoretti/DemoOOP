import { Libro } from "./model/Libro";
import { LibroDigitale } from "./model/LibroDigitale";
import { LibroCartaceo } from "./model/LibroCartaceo";

let n = new Libro ("La fabbrica di cioccolato", "Roald Dahl");
let libreria : Libro [ ] = [ ] ;
libreria.push ( new LibroCartaceo ("I promessi sposi", "Alessandro Manzoni", 400));
libreria.push ( new LibroDigitale ( "Divina Commedia", "Dante Alighieri", 400) );

libreria.forEach(l => console.log(l.getInfo()));
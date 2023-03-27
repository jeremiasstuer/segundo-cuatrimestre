import { Animal } from "./animal";
import { Araña } from "./araña";
import { Gato } from "./gato";
import { ListaDeAnimales } from "./listaDeAnimales";
import { Pez } from "./pez";

const miGato:Gato=new Gato(4,"mishi")
const miPez:Pez=new Pez(0,"nemo")
const miAraña:Animal=new Araña(8)
const miLista:ListaDeAnimales=new ListaDeAnimales()

console.log(miGato)
miGato.jugar("mishi")
//miLista.agregarAnimal(miGato)
//console.log(miLista)
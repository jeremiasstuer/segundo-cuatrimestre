import { SeleccionDeFutbol } from "./seleccionFutbol";
import { Futbolista } from "./futbolista";
import { Entrenador } from "./entrenador";
import { Masajista } from "./masajista";
import { TipoMasajes } from "./tipoMasajes";

const tipoMasajes:TipoMasajes=new TipoMasajes("Muscular")

const futbolista:Futbolista = new Futbolista ("Juan","Carlos",21021,12.2,10)
const entrenador:Entrenador= new Entrenador("Manuel","Monzo",12360,2.02,1)
const masajista:Masajista=new Masajista("Maria","Ojota",74125,5.6,tipoMasajes)

futbolista.getInfo()
entrenador.getInfo()
masajista.getInfo()
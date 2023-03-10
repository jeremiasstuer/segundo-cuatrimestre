import { Casino } from "./casino";
import { Blackjack } from "./blackJack";
import { Ruleta } from "./ruleta";

const blackJack = new Blackjack (10 , 5)
const ruleta = new Ruleta(20,1)

const casino = new Casino ("elBarco","la esquina","mi barrio", blackJack,ruleta)



console.log(casino)
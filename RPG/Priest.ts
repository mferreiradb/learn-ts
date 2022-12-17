import Personagem from "./Personagem";
import { Random } from "./util/random";

class Priest extends Personagem{
    private _espirito: number;
    private _versatilidade: number;

    constructor(nome: string) {
        super(nome)
        this._espirito = Random.getRandom(100, 200)
        this._versatilidade = Random.getRandom(100, 200)
    }
}
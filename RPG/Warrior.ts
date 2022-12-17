import Personagem from "./Personagem";
import { Random } from "./util/random";

class Warrior extends Personagem{
    private _forca: number;
    private _agilidade: number;

    constructor(nome: string) {
        super(nome)
        this._forca = Random.getRandom(100, 200)
        this._agilidade = Random.getRandom(100, 200)
    }
}
import Personagem from "./Personagem";
import { Random } from "./util/random";

class Priest extends Personagem{
    private _intelecto: number;
    private _velocidade: number;

    constructor(nome: string) {
        super(nome)
        this._intelecto = Random.getRandom(100, 200)
        this._velocidade = Random.getRandom(100, 200)
    }
}
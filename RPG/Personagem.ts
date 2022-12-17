import { Random } from "./util/random";

export default class Personagem {

    protected _nome: string;
    protected _energia: number;
    protected _vida: number;
    protected _ataque: number;
    protected _defesa: number;

    constructor(nome: string) {
        this._nome = nome
        this._vida = Random.getRandom(100, 200)
        this._vida = Random.getRandom(100, 200)
        this._energia = Random.getRandom(100, 200)
        this._ataque = Random.getRandom(100, 200)
        this._defesa = Random.getRandom(100, 200)
    }

    //  TODA VEZ QUE PENSAR EM LER DADOS NA CLASSE - USE PARAMETRO
    //  TODA VEZ QUE PENSAR EM IMPRIMIR NA CLASSE, USE RETORNO

    public get Nome(): string {
        return this._nome;
    }

    public set Nome(nome: string) {
        this._nome = nome;
    }

    public status(): string {
        return (
            "Guerreiro: \n" +
            "\nNome: " +
            this.Nome +
            ("\nEnergia: " + this._energia.toFixed(1)) +
            ("\nAtaque: " + this._ataque.toFixed(1)) +
            ("\nDefesa: " + this._defesa.toFixed(1))
        );
    }
    public treinarAtacar(): void {
        this._ataque += this.randomizar(7);
        this._energia -= this.randomizar(5);
        if (this._defesa > 100) {
            this._defesa = 0;
        }
    }
    public treinarDefesa(): void {
        this._defesa += this.randomizar(5);
        this._energia -= this.randomizar(10);
        if (this._defesa > 100) {
            this._defesa = 0;
        }
    }
    public descansar(hour: number): void {
        this._energia += hour * this.randomizar(10);
        if (this._energia > 100) {
            this._energia = 100;
        }
    }
    public batalhar(): number {
        let desgaste: number = this.randomizar(10);
        this._energia -= desgaste;
        return desgaste;
    }
    public isDead(): boolean {
        return this._energia < 0;
    }

    private randomizar(fator: number): number {
        return Math.random() * fator;
    }
}
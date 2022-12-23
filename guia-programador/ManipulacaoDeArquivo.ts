import { Print } from "./Print";

class ManipulacaoDeArquivo {
  protected _nome: string;
  constructor(nome: string) {
    this._nome = nome
  }
  
  public lerArquivo() {
    Print.ler(this._nome)
  }
}

let arquivo = new ManipulacaoDeArquivo('teste')

arquivo.lerArquivo()
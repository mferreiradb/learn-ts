import Hello from "./HelloDecorator";
import sumDec from "./SumDecorator";

  class Personagem {
    public nome?: string;
    public energia?: number;
    public ataque?: number;
    public defesa?: number;
  
    constructor() { }
  }
  
  let Sansa: Personagem = new Personagem;
  
  Sansa.nome = 'Sansa'
  Sansa.ataque = 20
  Sansa.defesa = 40
  
  console.log(Sansa)
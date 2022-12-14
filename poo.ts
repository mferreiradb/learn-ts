class Personagem {

    constructor(
      public nome: string,
      public energia: number,
      public ataque: number,
      public defesa: number,
    ) {}
  }
  
  let nomeMauricio: string = 'Mauricio'
  
  let Sansa: Personagem = new Personagem('Sansa', 12, 34, 65);
  
  let Mauricio: Personagem = new Personagem(nomeMauricio, 32, 54, 100)

  let AATrox: Personagem = new Personagem('AATrox', 500, 2000, 2000)

  console.log(Sansa)
  console.log(Mauricio)
  console.log(AATrox)
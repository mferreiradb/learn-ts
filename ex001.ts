import prompt from 'prompt-sync' // ACESSO AO TECLADO
class Personagem {

  constructor(
    public nome: string,
    public energia: number,
    public ataque: number,
    public defesa: number,
  ) { }
}

let teclado = prompt();

let option: number = 0

let AATrox: Personagem = new Personagem('AATrox', 500, 2000, 2000)

for (let i = 0 ; i < 3; i++) {
  console.log(`==========PERSONAGEM ${AATrox.nome}==========`)
  console.log('|1 - Treinar ataque          |')
  console.log('|2 - Treinar defesa          |')
  console.log('|3 - Imprimir atributos      |')
  console.log('|4 - Sair                    |')
  console.log('==============================')

  option = +teclado('Escolha uma ação\n')

  switch (option) {
    case 1:
      AATrox.ataque += 2
      console.log('Adicionado +2 ao ataque')
      break
    case 2:
      AATrox.defesa += 2
      console.log('Adicionado +2 à defesa')
      break
    case 3:
      console.log('Imprimindo atributos\n')
      setTimeout(function() {
        console.log(AATrox)
      }, 1000)
      break
    case 4:
      console.log('Operação encerrada')
      break
  }
}
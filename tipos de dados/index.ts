//BOOLEAN
let habilitado: boolean = true

//NUMBER
let decimal: number = 2001;
let hexadecimal: number = 0x7d5; //2005
let binario: number = 0b11111011101; //2013
let octal: number = 0o3744; //2020

//STRING
let nome: string = "Mauricio"
let sobrenome: string = "Ferreira"

//ARRAY
let numeros: number[] = [1, 2, 3]
let Numeros: Array<number> = [1, 2, 3]

//TUPLE
let x: [string, number];
x = ['Mauricio', 21];

//ENUM
enum Cor {Vermelho, Verde, Azul}
let corFundo: Cor = Cor.Azul;

//ANY
let resultadoApi: any = 4 //Tem o tipo number
resultadoApi = 'Piauí' //Tipo alterado parra string
resultadoApi = false //Tipo alterado para boolean

//VOID
const db = (): void => {
    console.log('Servidor online')
}

//NULL E UNDEFINED
let n: null = null;
let u: undefined = undefined;

//NEVER
const err = (message: string): never => {
    throw new Error(message);
}
const infiniteLoop = ():never => {
    while (true) {};
}

//OBJECT
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

const pessoa: object = {
    nome: 'Mauricio',
    idade: 21,
    habilitado: true
}

/*create(42); // Erro
create("string"); // Erro
create(false); // Erro
create(undefined); // Erro*/
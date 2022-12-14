"use strict";
//BOOLEAN
let habilitado = true;
//NUMBER
let decimal = 2001;
let hexadecimal = 0x7d5; //2005
let binario = 0b11111011101; //2013
let octal = 0o3744; //2020
//STRING
let nome = "Mauricio";
let sobrenome = "Ferreira";
//ARRAY
let numeros = [1, 2, 3];
let Numeros = [1, 2, 3];
//TUPLE
let x;
x = ['Mauricio', 21];
//ENUM
var Cor;
(function (Cor) {
    Cor[Cor["Vermelho"] = 0] = "Vermelho";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
let corFundo = Cor.Azul;
//ANY
let resultadoApi = 4; //Tem o tipo number
resultadoApi = 'Piauí'; //Tipo alterado parra string
resultadoApi = false; //Tipo alterado para boolean
//VOID
const db = () => {
    console.log('Servidor online');
};
//NULL E UNDEFINED
let n = null;
let u = undefined;
//NEVER
const err = (message) => {
    throw new Error(message);
};
const infiniteLoop = () => {
    while (true) { }
    ;
};
create({ prop: 0 }); // OK
create(null); // OK
const pessoa = {
    nome: 'Mauricio',
    idade: 21,
    habilitado: true
};
/*create(42); // Erro
create("string"); // Erro
create(false); // Erro
create(undefined); // Erro*/ 

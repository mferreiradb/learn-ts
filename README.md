**TYPESCRIPT**

- Instala-se como um pacote node

                npm install -g typescript

- Para gerar tsconfig

                tsc init

- Para ser executado no navegador, é necessário compilar o código escrito em TS para JS

                tsc arquivo.ts

- Para manter a compilação em tempo real / enquando está desenvolvendo

                tsc -w

- Para rodar o arquivo ts sem precisar compilar

                npm i -g ts-node
        
        - Para rodar os arquivos, usa-se ts-node [arquivo] no lugar de node [arquivo]

*Declaração de variável*

- Declara-se uma variável indicando a sua constancia, seguido pelo nome, o tipo e seu valor

            const nome: string = 'Mauricio';
            let idade: number = 21;
            var habilitado: boolean = true;

*Tipos de dados*

- Boolean

    - Armazena true ou false (verdadeiro ou falso)

            let habilitado: boolean = true

- Number

    - Números
    - Todos os números no TS, assim como no JS, são especificados por este tipo de dado
    - Suporta numeros do tipo inteiro, de ponto flutuante, hexadecimal, octais e binários

            let decimal: number = 2001;
            let hexadecimal: number = 0x7d5; //2005
            let binario: number = 0b11111011101; //2013
            let octal: number = 0o3744; //2020

- String

    - Textos
    - Pode ser declarado com aspas simples('') ou aspas duplas("")

            let nome: string = 'Mauricio';
            let sobrenome: string = 'Ferreira';

- Array

    - Coleção de dados
    - Variável que pode armazenar mais de um dado
    - Pode ser declarado de duas formas

            let numeros: number[] = [1, 2, 3];
            let numeros: Array<number> = [1, 2, 3];

- Tuple

    - Permite declarar uma variável do tipo array cujo tamanho e o tipo de dado de cada elemento é conhecido pelo desenvolvedor

            let x: [string, number];
            x = ['Mauricio', 21];

- Enum

    - Cada número representa um valor
    - Permite dar nomes amigáveis a valores numéricos dos indices

- Any

    - Aceita dados de qualquer um dos tipos básicos

            let resultadoApi: any = 4 //Tem o tipo number
            resultadoApi = 'Piauí' //Tipo alterado parra string
            resultadoApi = false //Tipo alterado para boolean

- Void

    - Abstém-se de qualquer tipo
    - Contrário do any
    - Normalmente utilizado em funções que não possuem retorno

            const db = (): void => {
                console.log('Servidor online')
            }

    - Pode ser atribuido a uma variável, porém não é muito útil, devido poder receber apenas tipos null e undefined
        - No caso da variável void receber apenas dados do tipo null, deve-se considerar que --strictNullChecks esteja desabilitado.

- Null e Undefined

    - No TypeScript, tanto o Null quanto Undefined possuem tipos associados a eles e são chamados pelos seus respectivos nomes

            let n: null = null;
            let u: undefined = undefined;

    - Por padrão, o tipo null é um subtipo dos outros tipos como, por exemplo, o tipo number e pode ser associado a eles. Quando --strictNullChecks está habilitado, null e undefined só podem ser associados a seus respectivos tipos e ao tipo any. A única exceção a essa regra é que o tipo null também pode ser associado ao tipo void. Caso --strictNullChecks esteja desabilitado, o tipo null poderá receber tanto o valor null quanto undefined.

- Never

    - Representa o tipo dos valores que nunca acontecem
    -  Por exemplo, never é o tipo de retorno para a expressão de uma função ou de uma arrow function, que sempre lança uma exceção ou uma que nunca retorna, como um loop infinito por exemplo.
    - tipo never é um subtipo de todos os tipos e pode ser associado a cada um deles, entretanto, nenhum dos tipos, incluindo o tipo any, é um subtipo de never e nem pode ser associado a ele, com exceção do próprio never.
    - Funções que retornam 'never' devem possuir um final inalcançável

            const err = (message: string): never => {
                throw new Error(message);
            }

- Object

    - Representa os tipos não-primitivos
        - qualquer tipo que não seja number, string, boolean, bigint, symbol, null ou undefined.
    - Com o tipo object, APIs, como Object.create podem ser representadas de uma forma melhor

            declare function create(o: object | null): void;

            create({ prop: 0 }); // OK
            create(null); // OK

            create(42); // Erro
            create("string"); // Erro
            create(false); // Erro
            create(undefined); // Erro

*Tipagem de funções*

- Uma função pode ou não ter um retorno. Quando uma função não possui retorno, a função é do tipo void

        - Quando não passamos este parametro e a função não tem retorno, é inferido o tipo void

                                const showMessage = (message: string): void => {
                                console.log(message)
                                }

                                showMessage('Olá') 

- Quando uma função possui retorno, a função recebe um tipo determinado do retorno

        - Quando não passamos este parametro, é inferido o tipo da função

                                const showMessage = (message: string): string => {
                                return message
                                }

                                showMessage(showMessage('Olá'))

                                const showMessage = (message: string) => {
                                return message
                                }

                                showMessage(showMessage('Olá'))

*Operadores*

- Aritméticos

    - Soma (+)

            let a: number = 2
            let soma: number = a + a
            console.log(soma) // 4
        
    - Subtração (-)

            let a: number = 2
            let soma: number = a - a
            console.log(soma) // 0
        
    - Multiplicação (*)

            let a: number = 2
            let soma: number = a * a
            console.log(soma) // 4
        
    - Divisão (/)

            let a: number = 2
            let soma: number = a / a
            console.log(soma) // 1
        
    - Módulo (%)
        - Resto da divisão

                let a: number = 2
                let soma: number = a % a
                console.log(soma) // 0

*Precedência de operadores*

- Ordem de prioridade em uma operação

            (*, /, %) > (+, -)
    
- Para alterar a ordem de precedência, basta englobar por parênteses o que é desejado ser operado antes

            5 + 8 / 2 //RESULTADO: 9
            (5 + 8) / 2 //RESULTADO: 6.5

- Incremento e Decremento

    - Incremento (++)
        - Soma +1 ao número

                //Com o operador depois da variável o resultado da operação
                //será o valor antes da soma.

                let a: number = 10;

                //O valor continuará sendo 10
                console.log(a++);

                //Apenas aqui o valor será 11
                console.log(a);

                //Ao utilizar o operador antes da variável o resultado é diferente,
                //pois o resultado será mostrado após a soma, sendo assim:

                let a: number = 10;

                //O valor será 11
                console.log(++a);

    - Decremento (--)
        - Remove 1 do número

                //Com o operador depois da variável o resultado da operação
                //será o valor antes da subtração.

                let a: number = 10;

                //O valor contiuará sendo 10
                console.log(a--);

                //Apenas aqui o valor será 9
                console.log(a);

                //Ao utilizar o operador antes da variável o resultado é diferente,
                //pois o resultado será mostrado após a subtração, sendo assim:

                let a: number = 10;

                //O valor será 9
                console.log(--a);

    - Concatenação
        - Junta duas strings

                let hello = 'hello ';
                let world = 'world'

                let texto = hello + world;

                //O resultado será hello world
                console.log(texto)

                let quantidade: number = 1;
                let objeto: string = " carro";

                let conteudo = quantidade + objeto;

                //O resultado será '1 carro'
                console.log(conteudo)

- Atribuição

    - Igualdade (=)
        - Atribui um valor a uma variável de qualquer tipo

                let counter: number = 0;
                let name: string = "Hatsune Miku";
                let bool: boolean = true;
        
    - Soma e atribuição (+=)
        - Soma os valores e atribui o resultado à variável determinada

                let a = 2;
                let b = 3;

                a += b;

                console.log(a); //Resultado é 5
            
    - Subtração e atribuição (-=)
        - Subtrai os valores e atribui o resultado à variável determinada

                let a = 2;
                let b = 3;

                a -= b;

                console.log(a); //Resultado é -1

    - Multiplicação e atribuição (*=)
        - Multiplica os valores e atribui o resultado à variável determinada

                let a = 2;
                let b = 3;

                a *= b;

                console.log(a); //Resultado é 6

    - Divisão e atribuição (/=)
        - Divide os valores e atribui o resultado à variável determinada

                let a = 6;
                let b = 2;

                a /= b;

                console.log(a); //Resultado é 3
    
- Relacionais

    - Maior que (>)

            let a: number = 5;
            let b: number = 2;

            let resultado;

            resultado = a > b;

            //Retorna true
            console.log(resultado)

            let a: number = 2;
            let b: number = 5;

            let resultado;

            resultado = a > b;

            console.log(resultado) //Retorna false
        
    - Menor que (<)

            let a: number = 5;
            let b: number = 2;

            let resultado;

            resultado = a < b;

            //Retorna false
            console.log(resultado)

            let a: number = 2;
            let b: number = 5;

            let resultado;

            resultado = a < b;

            console.log(resultado) //Retorna true

    - Maior ou igual (>=)

            let a: number = 5;
            let b: number = 2;

            let resultado;

            resultado = a >= b;

            console.log(resultado) //Retorna true

            let a: number = 5;
            let b: number = 5;

            let resultado;

            resultado = a >= b;

            console.log(resultado) //Retorna true

            let a: number = 5;
            let b: number = 2;

            let resultado;

            resultado = a > b;

            console.log(resultado) //Retorna true

            let a: number = 2;
            let b: number = 5;

            let resultado;

            resultado = a > b;

            console.log(resultado) //Retorna false
        
    - Menor ou igual (<=)

            let a: number = 5;
            let b: number = 2;

            let resultado;

            resultado = a <= b;

            console.log(resultado); //Retorna false

            let a: number = 2;
            let b: number = 5;

            let resultado;

            resultado = a <= b;

            console.log(resultado); //Retorna true

            let a: number = 2;
            let b: number = 2;

            let resultado;

            resultado = a <= b;

            console.log(resultado); //Retorna true
            
    - Comparação de igualdade
        - Verifica se uma variável possui o mesmo valor que outra

                let a: number = 2;
                let b: number = 2;

                let resultado;

                resultado = a == b;

                //Retorna true
                console.log(resultado)

                let a: number = 2;
                let b: number = 5;

                let resultado;

                resultado = a == b;

                console.log(resultado) //Retorna false
    
    - Comparaçãod e diferença
        - Verifica se uma variável não possui o mesmo valor que outra

                let a: number = 2;
                let b: number = 2;

                let resultado;

                resultado = a != b;

                //Retorna false
                console.log(resultado)

                let a: number = 2;
                let b: number = 5;

                let resultado;

                resultado = a != b;

                console.log(resultado) //Retorna true

- Lógicos

    - E ou AND (&&)
        - Operador para validar se mais de um critério está sendo cumprido em uma comparação

                let a: number = 5;
                let b: number = 6;
                let c: number = 7;

                let retornaTrue: boolean = a < b && c > b;
                let retornaFalse: boolean = a < b && b > c;

                //Resultado será true porque a é Menor que b e c é maior que b.
                console.log(retornaTrue);

                //Resultado será false, pois apesar de a ser Menor que b ,
                //b não é maior que c.
                console.log(retornaFalse);
    
    - Ou ou OR (||)
        - Operador para validar se ao menos um critério está sendo cumprindo em uma comparação

                let a: number = 5;
                let b: number = 6;
                let c: number = 7;

                //Retorna 'true' ainda que b não seja maior que c.
                //Pois a é menor que b e isso valida o 'Or'.
                let retornaTrue: boolean = a < b || b > c;

                //Retorna 'false' pois nenhuma das duas condições retornou 'true'.
                //a não é maior que b e b não é maior que c.
                let retornaFalse: boolean = a > c || b > c;

    - Não ou NOT (!)
        - Operador que inverte o resultado de uma expressão booleana

                let trueBool = true;

                let falseBool = !trueBool;

                //Retorna true
                console.log(trueBool);

                //Retorna false
                console.log(falseBool);

- Union (|)

        - Determina que uma variável pode ter mais de um tipo

                const printId = (id: number | string) => {
                console.log(`O ID do usuário é: ${id}`)
                }

                printId(12)
                printId('A')

                let ids: (string | number)[] = [
                        'A',
                        1
                ] 

                console.log(ids)

*Generics*

- Utilizado para deixar a tipagem flexível

- Declara-se com <>

- Declara-se um generic utilizando uma letra qualquer em maiúsculo. Este tipo faz com que qualquer tipo de dado serja atribuido à variável

- Um generic pode receber tipos primitivos adicionando *extends*

- Após a declaração de generic, pode-se declarar um tipo primitivo

        - Ao declarar um generic como tipo determinado para uma variável, a partir daquele ponto ela só poderpa ser do tipo declarado

                function useState<T>(){
                let state: T;

                function get() {
                        return state;
                }

                function set(newValue: T) {
                        state = newValue
                }

                return {get, set}
                }

                let newState = useState<string>();

                newState.get();
                newState.set(123); //GERA ERRO
                newState.set('Mauricio');
                //
                //
                function useState<T extends number | string>(){
                let state: T;

                function get() {
                        return state;
                }

                function set(newValue: T) {
                        state = newValue
                }

                return {get, set}
                }

                let newState = useState<string>();

                newState.get();
                newState.set(123); GERA ERRO
                newState.set('Mauricio');

- Pode-se adicionar uma regra que faça com que o Generic assuma um determinado tipo caso o desenvolvedor não o faça, basta utilizar o oiperador de atribuição na declaração do generic

                function useState<T extends number | string = string>(){

*Types*

- Reaproveitar tipos

- Quando houver a necessidade de variáveis receberem valores de mesmo tipo para o mesmo contexto, pode-se criar um tipo específico para àquelas variáveis

                type IdType = string | number | undefined;

                let userId: IdType;
                let adminId: IdType;

                userId = 1
                userId = 'A'
                userId = true // GERA ERRO

                adminId = 1
                adminId = 'A'
                adminId;

*Type Assertion (Asserção de tipo)*

- Utilizado quando o TS "não sabe" qual a tipagem e queremos que o TS "acredite no que estamos declarando"

        - Por exemplo, quando consumimos APIs

- Cria-se um type e define-se a variável com as

                                type UserResponse = {
                                        ui: number;
                                        name: string;
                                        avatar: string;
                                }

                                let userRes = {} as UserResponse;


*Objetos*

- Cria-se um type, que terá como valor um objeto e informamos o tipo de cada propriedade do objeto

- Os objetos relacionados a este, recebem o tipo do type definido

                                type Point= {
                                        x: number;
                                        y: number;
                                }

                                function printCoord(points: Point): void {
                                        console.log(`O eixo x é: ${points.x} e o eixo y é: ${points.y}`)
                                }

                                printCoord({x: 12, y: 10});
                                //
                                //
                                type User= {
                                        id: number;
                                        login: string;
                                        password: string;
                                        isAdmin: boolean;
                                }

                                const newUSer: User = {id: 1, login: 'Mau mau', password: 'Teste123', isAdmin: true};

- Propriedades opcionais de um objeto

        - Para definir uma propriedade como opcional, basta adicionar uma interrgação ao final da declaração da propriedade, antes do tipo

                                type User= {
                                id: number;
                                login: string;
                                password: string;
                                isAdmin: boolean;
                                }

                                const newUSer: User = {id: 1, login: 'Mau mau', password: 'Teste123'}; // GERA ERRO
                                //
                                //
                                type User= {
                                id: number;
                                login: string;
                                password: string;
                                isAdmin?: boolean;
                                }

                                const newUSer: User = {id: 1, login: 'Mau mau', password: 'Teste123'}; // OK

*Intersecção de tipos*

- Usado quando queremos definir que um objeto terá propriedades de dois ou mais types

- Usado quando queremos definir que uma variável terá valores permitidos de dois ou mais types

        - Cria-se um novo type, que será a união de todos os types desejados, de forma que a variável criada com o novo type, passa a poder receber valores com os tipos de todos os types unidos

        - Cria-se um novo type, que será a união de todos os types desejados, de forma que o objeto criado com o novo type, passa a poder receber as propriedades de todos os types unidos

- Cria-se o novo tipo usando o operador de atribuição, atribuindo os types desejados através do simbodo &

                                type User= {
                                        id: number;
                                        login: string;
                                        password: string;
                                        isAdmin?: boolean;
                                }

                                type Char = {
                                        nickname: string;
                                        level: number;
                                }

                                type Union = Char & User;

                                let player: Union = {
                                        id: 1,
                                        level: 12,
                                        login: 'Maumaus',
                                        nickname: 'Mau mau',
                                        password: 'Teste123',
                                }

*Interface*

- Outra forma de declarar e criar tipos
        
        - Declaração de interface

                                interface IUser {
                                        id: number;
                                        login: string;
                                        password: string;
                                        isAdmin?: boolean;
                                }

                                interface IChar {
                                        nickname: string;
                                        level: number;
                                }

                        - Intersecção(União) de interfaces
                        
                                interface IUnion extends IChar, IUser {}

                                let iPlayer: IUnion = {
                                        id: 1,
                                        level: 12,
                                        login: 'Maumaus',
                                        nickname: 'Mau mau',
                                        password: 'Teste123',
                                }


*Types vs Interface*

- Possuem os mesmos objetivos

- Diferença sintatica

- Interface é mais utilizado para POO, porém os objetivos são os mesmos

*Programação Orientada a Objetos*

- Abstração

- Encapsulamento

        - Propõe de isolar o máximo possível as classes, de forma a esconder detalhes de funcionamento interno

        - Visa aumentar a fliexibilidade e memelhorar a manutenção e aumentar a extensibilidade do Software

        - Tem o objetivo de proteger os atibutos da classe

        - Modiicadores de acesso

        - Quando não definido explicitamente, o padão é public

                - Definem a exposição dos membros da classe

                - Definir a visinilidade dos atributos, métodos e classes

                        - public (+)

                                - Público para qualquer arquivo, classe que esteja no mesmo projeto

                                - Não recomendado para uso indiscriminado

                                - Usa-se apenas para métodos e atributos que desejemos deixar acessíveis para outras classes/arquivos

                        - private (-)

                                - É o modificador mais reservado

                                - Nenhum elemento fora da classe pode acessar

                                - Mais utilizado e mais recomendado

                                - Normalmente, define-se atributos como private

                                - Métodos serão privados quando fornecerem serviços apenas à própria classe

                        - proteced (#)

                                - Vísivel apenas por classes herdadas

                                - Utilizado apenas em heranças

        - Métodos de acesso

                - Têm a funcionalidade de prover acesso aos atributos privados que julgamos ter de acessar

                - Poder controlar como as informações entram e saem

                - Ao tentar acessar o dado exportado, o acesso deverá ser feito pelo nome do método, não do atributo original

                - get

                        - Retornam o tipo do atributo que será provido o acesso

                        - Permite exibir o valor do atributo ou retorno

                        - Não recebem parametro

                        - Seu nome é composto pelo prefixo "get" seguido do nome do atributo que o acesso será provido

                                export default class Personagem {
                                constructor(
                                        private _nome: string,
                                        private energia: number,
                                        private vida: number,
                                        private ataque: number,
                                        private defesa: number
                                ) {}

                                public get nome(): string {
                                        return this._nome;
                                }

                - set

                        - Prover modificação aos atributos privados que devem ser modificados

                        - O retorno sempre será vazio

                        - Recebe por parametro o novo dado a ser inserido

                        - Seu nome é composto pelo prefixo "set" seguido do nome do atributo que o acesso será provido

                                export default class Personagem {
                                constructor(
                                        private _nome: string,
                                        private energia: number,
                                        private vida: number,
                                        private ataque: number,
                                        private defesa: number
                                ) {}

                                public set getNome(nome: string) {
                                        if (this._nome.length > 2) {
                                                this._nome = nome;
                                        } else {
                                                throw new Error("Falha na validação dos dados. Verifique o tamanho do nome")
                                        }
                                }
                        
                        - Ao tentar acessar o dado exportado, o acesso deverá ser feito pelo nome do método, não do atributo original. isto é, se quisermos saber o nome do Personagem, devemos consultar por getNome, pois o atributo nome é private. O acesso será feito por [person.getNome]

                                class Pessoa {
                                        private _name: string;

                                        public set name(name: string) {
                                                this._name = name
                                        }
                                        public get name() {
                                                return this._name
                                        }
                                }

                                let person: Pessoa = new Pessoa
                                person.name = 'Mauricio'

                                console.log(person.name)

- Herança

        - Uma classe herda métodos e atributos de outra

        - Uma classe pode extender apenas uma classe

                - Sem Herança Multipla

        - Cria-se uma Super Classe que guarda os atributos e métodos que devem estar em todas as subclasses e em cada subclasse, faz-se as especificidade

        - As subclasses não possuem acesso ao que for private, para que as subclasses tenham acesso, o modificador deve ser protected

        - O numero de atributos da subclasse deve ser igual ou maior ao numero de atributos da Super Classe

        - Abaixo do construtor da subclasse, na primeira linha do construtor, deve ser chamado o construtor da Super Classe, através do método super(). Super receberá como parametro os atributos definidos no construtor da Super Classe

        - Podemos manipular os atributos da Super Classe nas subclasses através de chamadas this como se os atributos estivessem definidos nas subclasses

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
                                }
                                //
                                //
                                import Personagem from "./Personagem";
                                import { Random } from "./util/random";

                                class Warrior extends Personagem{
                                private _forca: number;
                                private _agilidade: number;

                                constructor(nome: string) {
                                                super(nome)
                                                this._forca = Random.getRandom(100, 200)
                                                this._agilidade = Random.getRandom(100, 200)
                                                this._ataque = Random.getRandom(200, 400)
                                        }
                                }

        - Ao instanciar a classe, podemos definir que o objeto é do tipo da Super Classe e sua instanciação é o tipo da subclasse

                                let priest: Personagem = new Priest("Angelo priest");

        - DICA PARA DETERMINAR SE DEVEMOS UTILIZAR HERANÇA

                - Se a x é y, há herança, senão, há uma composição. Neste tipo de caso, deve-se criar um type ou interface, para que possamos definir corretamente o atributo

                - Warrior é um personagem? Sim! Neste caso, há erança. Warrior deve extender uma classe Personagem

                - Warrior é uma raça? Não! Neste caso, não há erança. Warrior não deve extender uma classe Raça. Cria-se um atributo raça, que pode receber um type ou interface Raça, ou outro tipo
        
        - IMPEDIR QUE UMA CLASSE SEJA HERDADA

                - Parra que uma classe não seja extendida, deve-se definir o construtor como private

- Polimorfismo

        - 

- Classes

        - Possui atributos e funções

        - Tipo de dado mais geral

        - Pode ter o valor das propriedades inicializado no ato da ceclaração

                                export class Personagem {
                                        nome?: string = '';
                                        energia?: number = 0;
                                        ataque?: number = 0;
                                        defesa?: number = 0;
                                }

                                let Sansa: Personagem = new Personagem;

                                Sansa.nome = 'Sansa'

- Objetos

        - Instancia de classe

        - Diz-se que a criaão de um objeto é uma instanciação (instanciar um objeto)

                - let Mauricio = new Pessoa

                - Herda as propriedades e funções da classe instanciada

- Método Construtor

        - Só pode ser chamado uma vez por objeto

        - Define como um objeto é inicializado

        - Caso não seja definido explcitamente, o TS inferirá que o construtor segue o padrão

                export class Personagem {
                        nome?: string = '';
                        energia?: number = 0;
                        ataque?: number = 0;
                        defesa?: number = 0;

                        constructor() {}
                }

        - Define-se os valores iniciais de um objeto instanciado com o uso de this.[variável]

                class Personagem {
                        nome?: string = '';
                        energia?: number = 0;
                        ataque?: number = 0;
                        defesa?: number = 0;

                        constructor() {
                        this.energia = 12
                        }
                }

                let Sansa: Personagem = new Personagem;

                Sansa.nome = 'Sansa'
                Sansa.ataque = 20
                Sansa.defesa = 40

                console.log(Sansa)

        - Ao definir o construtor, podemos definir propriedades como obrigatórias. Caso feito, deve ser passado o valor dessa propriedade dentro do construtor no ato da declaração e na instanciação do objeto

                class Personagem {
                        nome: string = '';
                        energia: number = 0;
                        ataque: number = 0;
                        defesa: number = 0;

                        constructor(nome: string) {
                        this.energia = 12
                        this.nome = nome
                        }
                }

                let Sansa: Personagem = new Personagem('Sansa');

                Sansa.ataque = 20
                Sansa.defesa = 40

                console.log(Sansa)
        
        - Podemos declarar os atributos de uma classe no construtor, sem que precisemos definir dentro da própria classe. Dessa forma também faz-se necessária a definição dos valores na instanciação do objeto. Dessa forma também não se faz mais necessário passar os valores através de this

        - Por convenção, podemos declarar o nome dos atribudos precedidos de um underline, para que não haja duplicidade com outros tipos de dados

                class Personagem {

                constructor(
                        public _nome: string,
                        public _energia: number,
                        public _ataque: number,
                        public _defesa: number,
                ) {}
                }
                
                let nome = 'Mauricio'
                
                let Sansa: Personagem = new Personagem('Sansa', 12, 34, 65);
                
                let Mauricio: Personagem = new Personagem(nome, 32, 54, 100)
                console.log(Sansa)
                console.log(Mauricio)

- Métodos

        - Ações(funções) que podem ser executadas pelo objeto

        - São definidos após o construtor

        - Os métodos são funções presentes em uma classe. Para definí-los, basta criar uma função sem a necessidade de chamar function

        - Necessário utilziar o this para referenciar os atributos da classe que são passados nos métodos

                export class Personagem {

                constructor(
                public nome: string,
                public energia: number,
                public vida: number,
                public ataque: number,
                public defesa: number,
                ) { }

                status(): string {
                        return (
                        "Guerreiro: \n" +
                        "\nNome: " +
                        this.nome +
                        ("\nEnergia: " + this.energia.toFixed(1)) +
                        ("\nAtaque: " + this.ataque.toFixed(1)) +
                        ("\nDefesa: " + this.defesa.toFixed(1))
                        );
                }
                treinarAtacar(): void {
                        this.ataque += Math.random() * 7;
                        this.energia -= Math.random() * 10;
                        if (this.defesa > 100) {
                        this.defesa = 0;
                        }
                }
                treinarDefesa(): void {
                        this.defesa += Math.random() * 5;
                        this.energia -= Math.random() * 10;
                        if (this.defesa > 100) {
                        this.defesa = 0;
                        }
                }
                descansar(hour: number): void {
                        this.energia += hour * (Math.random() * 10);
                        if (this.energia > 100) {
                        this.energia = 100;
                        }
                }
                batalhar(): number {
                        let desgaste: number = Math.random() * 100;
                        this.energia -= desgaste;
                        return desgaste;
                }
                isDead(): boolean {
                        return this.energia < 0;
                }
                }
        
        - Tipos de métodos

                - Static

                        - Método que não precisa da instancia da classe para ser invocado

                        - Para isso, o método em questão não terá acesso às propriedades da classe, a menos que as mesmas sejam do tipo static
                
                - Void

                        - Método sem retorno

*Adicionando TypeScript a um projeto JavaScript*

- Realiza-se as instalações do TS e do arquivo tsconfig.json

- Altera-se as extensões dos arquivos para .ts ou .tsx

- Faz-se a definição dos tipos nos arquivos

- Caso seja um projeto em React, dever ser feita a instalação dos tipos para React

                npm i --save-dev @types/react
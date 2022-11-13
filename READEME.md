**TYPESCRIPT**

- Instala-se como um pacote node

            npm install -g typescript

- Para ser executado no navegador, é necessário compilar o código escrito em TS para JS

            tsc arquivo.ts

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

    Maior ou igual (>=)

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
        
    Menor ou igual (<=)

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
            
    Comparação de 
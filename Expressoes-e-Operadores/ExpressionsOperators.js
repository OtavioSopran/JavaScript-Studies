/*
    Expressions and Operators

    - Expressions 
    - Operators
         Binary
         Unary
         Ternary

*/

// it`s an expression 
// let number

let number = 1

//Binary poruqe são dois elementos com um operador no meio
console.log(number + 1)

//Unary poruqe tem apenas um elemnto de valor 
console.log(++number)
//ou
console.log(typeof number)

//Ternary
console.log(true ? "alo" : "nada")
console.log(false ? "alo" : "nada")



/*
    new

    * left-hand-side expression
    * criar um novo objeto

*/

let name = new String("Otavio")
let age = new Number(31)
let date = new Date("2020-12-01")
console.log(name, age,)
console.log(date)



/*
    Operadores unarios

    * typeof
    * delete

*/

const person = {
    name: "Otavio",
    age: 25,
}
delete person.age
console.log(person)

// Operadores aritimeticos 

// Multiplicacao *
console.log(3.2 * 5.5)

// Divisao /
console.log(12 / 2)

// Soma +
console.log(34 + 67)

// Subtracao -
console.log(34 - 23)

// Resto de divisao % (o resultado eh o resto inteiro que sobra depois da divisao)
let remainder
remainder = 11 % 3
console.log(remainder)

// Incremento (cada incremet++ acrescenta mais um )
let increment = 0
increment++
increment++
increment++
increment++
console.log(increment)
// em caso de usar o increment++ dentro do () vai ter diferenca entre por o sinal ++ ante da ou depois da palavra

// Decremento ( eh a mesma coisa que o increment porem subtraindo)
let incrementMenos = 0
incrementMenos--
incrementMenos--
incrementMenos--
incrementMenos--
console.log(incrementMenos)

// Exponencial **  (3 elevado a 3)
console.log(3 ** 3)




// Grouping operator ( )
let total = 2 + 3 * 5
console.log(total)
// essa conta como na matematica diz, primeiro multiplicamos e depois somamos o resultado com 2
// os agrupamento de operador faz com que isso mude como assim 
let total0 = (2 + 3) * 5
console.log(total0)


// Operadores de comparacao 

// Ira comparar valores e retornar um Boolean como resposta a comparacao

let one = 1
let two = 2

// == igua a
console.log(two == 1)
console.log(one == "1")

// != diferente de
console.log(one != two)
console.log(one != 1)
console.log(one != "1")


// === estritamente igual a
console.log(one === "1")
console.log(one === 1)

// !== estritamente diferente de 
console.log(two !== "2")
console.log(two !== 2)


// > maior que 
console.log(one > two)

// >= maior ou igual que
console.log(one > 1)
console.log(two > 1)

// < menor que 
console.log(one < two)

// <= menor ou igual que 
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)


// Operadores de atribuicao (Assignment)
let x

// assignment
x = 1

// addition assignment
// x com valor de um samado com dois
// x = x + 2     resultado 3
x += 2

// subtraction assignment
// x = x - 1     resultado 2
x -= 1

// multiplication assinment
// x = x * 2
x *= 2

// division assignment
// x = x / 2
x /= 2

// remainder, exponetiation
// x = x % 2
// x %= 2
x **= 2
console.log(x)



// Operadores logicos (logical operators)

// - 2 valores booleanos, quando verificados, 
// resultara em verdadeiro ou falso

let pao = false
let queijo = true

// and &&
console.log(pao && queijo)

// or ||
console.log(pao || queijo)

// not !
console.log(!pao, !queijo)


// Operador Condicional (Ternario)

// Dependendo da condicao, nos receberemos valores diferentes

// Condicao entao valor 1 se nao valor 2
// condition ? value1 : value2

// Exemplos
// Cafe da manha top
let pao1 = true
let queijo2 = false

// const niceBreakfast = (pao1 || queijo2 ? "Cafe top" : "Cafe Ruim")
const niceBreakfast = (pao1 && queijo2 ? "Cafe top" : "Cafe Ruim")

console.log(niceBreakfast)



// Maior de 18
let age1 = 17
const canDrive = age1 >= 18 ? "Can drive" : "Can`t drive"

console.log(canDrive)


// Operador de String (String operator)

// comparsion (comparacao)
console.log("a" == "b")

// concatenation (concatenacao)
// retorna a uniao de duas strings
let alpha = "alpha"
console.log(alpha + "bet")
//ou simplismente assim, quantas vezes quiser
console.log("a" + "b" + alpha + "bet")
//mesmo que seja um numero ele vai transformar em string
console.log(alpha + "b" + 420)



// Type conversion (typecasting) vs Type coersion 
console.log(Number("9") + 5)

/* 
     FALSY
     Quando um valor eh considerado false em contextos onde um booleano
     eh obrigatorio ( condicionais e loops)
     
     false
     0
     -0
     ""
     null
     undefined
     NaN
*/

console.log(false ? "verdadeiro" : "falso")
console.log(0 ? "verdadeiro" : "falso")
console.log(-0 ? "verdadeiro" : "falso")
console.log("" ? "verdadeiro" : "falso")
console.log(null ? "verdadeiro" : "falso")
console.log(undefined ? "verdadeiro" : "falso")
console.log(NaN ? "verdadeiro" : "falso")

/* 
     TRUTHY
     Quando um valor eh considerado true em contextos onde um booleano
     eh obrigatorio ( condicionais e loops)
     
     true
     {}
     []
     3.23
     "0"
     "false"
     -1
     Infinity
     -Infinity
*/

console.log(true ? "verdadeiro" : "falso")
console.log({} ? "verdadeiro" : "falso")
console.log([] ? "verdadeiro" : "falso")
console.log(3.23 ? "verdadeiro" : "falso")
console.log("false" ? "verdadeiro" : "falso")
console.log(-1 ? "verdadeiro" : "falso")
console.log(Infinity ? "verdadeiro" : "falso")
console.log(-Infinity ? "verdadeiro" : "falso")



/* Operator precedence
    Precedencia de operadores

* grouping                   ( )
* negacao de incremento      ! ++ --
* multiplicacao e divisao    * /
* adicao e subtracao         + -
* relacional                 < <= > >=C
* igualdade                  == != === !==
* AND                        &&
* OR                         ||
* condicional                ?:
* assinment (atribuicao)     = += -= *= %=
  // ordem dos operadores mais importantes que serao executados primeiro
*/
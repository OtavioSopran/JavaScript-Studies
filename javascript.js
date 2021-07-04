// Variáveis e tipos de dados
// Decalaração or declaration
var name

// assignment oe atribuição de valores
name = "Otavio"

// Que tipo de dado foi coloca na variável
console.log(typeof name)

// agrupamento de declarações
let age, isHuman
age = 18
isHuman = true

// multiplus argumentos na funcao
console.log(name, age, isHuman)
// escrita de texto + variaveis
// concatenando valores
console.log("o " + name + " tem " + age + " anos")

// interpolando valores com template literals or template strings
console.log(`o ${name} tem ${age} anos.`)

// OBJECT
const person = {
    name: "Jhon",
    age: 30,
    weight: 88.6,
    isAdmin: true
}
console.log(`${person.name} tem ${person.age} e pesa ${person.weight}`)

// Array
const animals = [
    "Lion",
    "Monkey",
    {
        name: "Cat",
        age: 3
    }
]
// como acessar valores dentro do array
console.log(animals[1])
console.log(animals.length)

// 1. Declare uma variavel de nome weigh
let weight

// 2. que tipo de dado eh a varial a cima?
undefined

/* 3. Declare uma varialvel e atribua valores para cada um dos dados:
      * name: String
      * age: Number (integer)
      * stars: Number (float)
      * isSubscribd: Boolean
*/
// let name = "Otavio"
// let age = 31
// let stars = 4.8
// let isSubscribd = true

/* 4. A variavel student abaixo eh de que tipo de dados?
   Object

   4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3

   4.2 Mostre no console a seguinte mensagem:
   <name> de idade <age> pesa <weight> kg.
*/

let student = {
    name: "Otavio",
    age: 31,
    weight: 69.6,
    isSubscribd: true
}
// console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

/* 5. Declare uma variavel do tipo array, de nome students e atribua a ela nenhum
   valor, ou seja, somente o array vazio
*/

let students = [
    student
]

console.log(students)

/* 6. Retribua valor para a variavel a cima, colocando dentro dela o objeto student
   da questao 4. (Nao copiar e colar o objeto, mas usar o objeto criado e inserir
   ele no array)
*/

/* 7. Coloque no console o valor da posicao zero do array acima
*/
console.log(students[0])

/* 8. Crie um novo student e coloque na posicao 1 do array student
*/
const Jhon = {
    name: "Jhon",
    age: 23,
    weight: 74.8,
    isSubscribd: true
}

// students = [
//     student,
//     Jhon
// ]
// ou poderia fazer assim tambem

students[1] = Jhon

console.log(students)

/* 9. Sem rodar o codigo responda qual eh a resposta do codigo abaixo e porque?
apos sua resposta, rode o codigo e veja se vc acertou.

   console.log(a)
   var a = 1
*/

console.log(a)
var a = 1
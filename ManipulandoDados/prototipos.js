/*   Prototype

     * prototype-based language
     * prototype chain
     * __proto__

*/

/* 

   Type conversio (typecasting) vs Type coersion
   
   * Alteracao de um tipo de dado para outro tipo de dado

*/

// Type coersion transforma em string e concatena 
console.log("9" + 5)

// Type conversio (typecasting) transforma a string em numero e soma
console.log(Number("9") + 5)


//Manipulando Strings e Numeros

// Transformando String em Numero e Numero em String
let string = "123"
console.log(Number(string))

let number = 123
console.log(String(number))

// contar quantos caracteres tem uma string e quantos digitos tem um numero
let word = "Paralelepipedo"
console.log(word.length)

const number2 = 123456789
console.log(String(number2).length)

//Transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula
let number3 = 13213216546.6898764465465
console.log(number3.toFixed(2).replace(".", ","))

//Transformar letras minusculas em maiusulas e fazer o contrario tambem
let wordUp = "programar eh muito legal"
console.log(wordUp.toUpperCase())

let wordUp2 = "PROGRAMAR EH MUITO LEGAL"
console.log(wordUp2.toLowerCase())


/*   
    Separe um texto que contem espacos, em um novo array onde cada texto eh uma posicao
    do array. Depois disso, transforme o array em um texto e onde eram espacos, coloque _
*/

let phrase = "Eu quero aprender JavaScript!"
let myArray = phrase.split(" ")
console.log(myArray)

let phrase2 = "Eu quero aprender JavaScript!"
let myArray2 = phrase.split(" ")
let phraseWithUnderscore = myArray2.join("_")
console.log(phraseWithUnderscore)

// Verificar se o texto contem a palavara Amor
let phrase3 = "Eu quero vivier!"
console.log(phrase3.includes("o amor"))
console.log(phrase3.includes("quero"))

//Criar array com construtor
let myArray3 = new Array("a", "b", "c")
console.log(myArray3)

//Contar elementos de um array
console.log(["a", "b", "c",].length)

//pegando o primenro elemento do arry
console.log([
    "a",
    { type: "array" },
    function () { return "alo" }
][0])

//pegando o type
console.log([
    "a",
    { type: "array" },
    function () { return "alo" }
][1].type)

//chamando a function
console.log([
    "a",
    { type: "array" },
    function () { return "alo" }
][2]())



//Transformar uma cadeia de caracteres em elementos de um array
let word2 = "manipulacao"
console.log(Array.from(word2))


//Manipulando Arrays

let techs = ["html", "CSS", "js"]

//adicionar um item no fim
// techs.push("node.js")
//adicionar no comeco
// techs.unshift("sql")
//remover do fim 
// techs.pop()
//remover do comeco 
// techs.shift()
//pegar somente alguns elementos do array
// console.log(techs.slice(1, 3))

//remover um ou mais itens em qualquer posicao do array
// techs.splice(1, 1)

//encontrar a posicao de um elemento no array e remover
let index = techs.indexOf("html")
techs.splice(index, 1)

console.log(techs)

//function expression
//function anonymous

//parametros (parameters)
const sum = function (number1, number2) {
    console.log(number1 + number2)

}

sum(2, 3) //arguments - argumentos
sum(4, 5)

const less = function (number3, number4) {
    let total = number3 - number4
    return total
}

let number3 = 34
let number4 = 25

console.log(`o numero 1 eh ${number3}`)
console.log(`o numero 2 eh ${number4}`)
console.log(`a subtrcao eh ${less(number3, number4)}`)

// Funcao eh um liquidificador
function fazerSuco(fruta1, fruta2) {
    return "suco de " + fruta1 + fruta2
}

const copo = fazerSuco("banana", "maca")

console.log(copo)

//function scope
let subject = "Create video"

function createThink(subject) {
    return "study"
}

console.log(createThink(subject))
console.log(subject)


//Function hoisting
sayMyName();

function sayMyName() {
    console.log("Otavio")
}

//arrow function
//um jeito melhor de fazer uma function expression
const sayMyNickName = () => {
    console.log("Sopran")
}

sayMyNickName()

//callback function
function sayMyNameAgain(name) {
    name()
}

sayMyNameAgain(
    () => {
        console.log("Esta eh em uma callback")
    }
)

/* Function() constructor
   * expressao new
   * criar um novo objeto
   * this keyword 
*/

function Person(name) {
    this.name = name
    this.gotMarrid = function () {
        return this.name + " se Casaram"
    }
}
const Otavio = new Person("Otavio e Stefani")
const Stefani = new Person("Stefani e Otavio")
console.log(Otavio.gotMarrid())
console.log(Stefani.gotMarrid())



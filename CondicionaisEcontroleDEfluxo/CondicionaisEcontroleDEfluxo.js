// Control Flow

// if...else

//posso fazer assim
// let temperature = 35

// if (temperature >= 37.5) {
//     console.log("Febre alta")

// } else if (temperature < 37.5 && temperature >= 37) {
//     console.log("Febre")

// } else {
//     console.log("Saudavel")
// }

// ou assim
let temperature = 36.5
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature) {
    console.log("Febre alta")

} else if (mediumTemperature) {
    console.log("Febre")

} else {
    console.log("Saudavel")
}


//switch

let expression = ""

switch (expression) {
    case "a":
        // codigo
        console.log("a")
        break
    case "b":
        //codigo
        console.log("b")
        break
    default:
        console.log("default")
        break
}

function calculate(number1, operator, number2) {
    let result = 0
    // caso o operador ou seja la o que for implementado a baixo nao existir entao retorna default e 0

    switch (operator) {
        case "+":
            result = number1 + number2
            break
        case "-":
            result = number1 - number2
            break
        case "*":
            result = number1 * number2
            break
        case "/":
            result = number1 / number2
            break
        default:
            console.log("nao implementado")
            break
    }

    return result

}

console.log(calculate(4, "*", 8))



// throw

function sayMyName(name = "") {
    if (name === "") {
        throw "Nome eh necessario"
    }

    console.log(name)
}
// try...catch
try {
    sayMyName("Otavio")
} catch (e) {
    console.log(e)
}

console.log("apos o try/catch")
/*  ### Trasnformar notas escolares

Crie um algoritmo que transforme as notas do sistema numerico
para sistema de notas em caracteres tip A B C 

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que  60   - F

*/

// naneira como eu fiz
// let nota = 91

// let A = nota >= 90
// let B = nota >= 80 && nota <= 89
// let C = nota >= 70 && nota <= 79
// let D = nota > 60 && nota <= 69
// let F = nota < 60

// if (A) {
//     console.log("A")

// } else if (B) {
//     console.log("B")

// } else if (C) {
//     console.log("C")

// } else if (D) {
//     console.log("D")

// } else {
//     console.log("F")
// }




// maneira feita pelo professor 


function pegarNota(nota) {

    let A = nota >= 90 && nota <= 100
    let B = nota >= 80 && nota <= 89
    let C = nota >= 70 && nota <= 79
    let D = nota > 60 && nota <= 69
    let F = nota < 60 && nota >= 0

    let notaFinal;

    if (A) {
        notaFinal = "A"

    } else if (B) {
        notaFinal = "B"

    } else if (C) {
        notaFinal = "C"

    } else if (D) {
        notaFinal = "D"

    } else if (F) {
        notaFinal = "F"

    } else {
        notaFinal = "Nota invalida"
    }

    return notaFinal
}

console.log(pegarNota(65))
console.log(pegarNota(72))
console.log(pegarNota(45))
console.log(pegarNota(98))
console.log(pegarNota(101))
console.log(pegarNota(-1))
console.log(pegarNota(53))
console.log(pegarNota(82))









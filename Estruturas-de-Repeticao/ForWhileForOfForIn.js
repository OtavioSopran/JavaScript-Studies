// Estrutura de repeticao
// for

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// break - para a execucao do loop
for (let b = 10; b >= 1; b--) {
    if (b === 5) {

        break;
    }
    console.log(b)
}

// continue - pula a execucao do momento
for (let c = 10; c >= 1; c--) {
    if (c === 5) {

        continue;
    }
    console.log(c)
}



// while
// geralmente quando nao sabemos o momento da parada, entao usamos o while
let a = 0
while (a < 10) {
    console.log(a)

    a++;
}


// for..of
let name = "Otavio"
let names = ["Ste", "Otavio", "Marilene", "Gaucho"]

for (let char of name) {
    console.log(char)
}

for (let name of names) {
    console.log(name)
}


// for...in
let person = {
    name: "Jhon",
    age: 30,
    weight: 88.6
}

for (let property in person) {
    console.log(property)
    console.log(person[property])
}
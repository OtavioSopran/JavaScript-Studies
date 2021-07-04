/*

Crie um objeto que possuira 2 propriedades, ambas do tipo
array:
   * receitas: []
   * despesas: []

Agora, crie um funcao que ira calcular o tal de receitas e despesas e ira mostrar
uma mensagem se a familia esta com saldo positivo oi negativo, seguido do valor do saldo

*/

let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00]
}

function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }
    console.log(`Seu saldo eh ${balanceText}: ${total.toFixed(2)} R$`)
}

calculateBalance()
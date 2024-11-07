let valorDepositado, valorRendimento, taxaJuros, valorFinal
let nome

nome = prompt("Qual seu nome?")
valorDepositado = parseInt(prompt(`${nome}, digite o valor depositado: `))
//Taxa de Juros Fixa
taxaJuros = 7/100

valorRendimento = valorDepositado * taxaJuros

valorFinal = valorDepositado + valorRendimento

document.write(`${nome}, o valor do rendimento após 1 mês: ${valorFinal}`)
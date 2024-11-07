let real, dolar, cotacaoDolar
let nome

//Entrada de dados
nome = prompt("Qual o seu nome?")
cotacao = parseFloat(prompt(`${nome}, quanto está a cotação do dólar?`))
real = parseFloat(prompt(`${nome}, digite o valor para ser convertido em dolar:`))

//Expressão
dolar = real / cotacao

//valor em reais
document.write(`${nome}, você tem em dólar: U$${dolar}`)
document.write(`você tem em reais R$${real}`)
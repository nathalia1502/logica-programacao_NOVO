let real
let cotacao_dolar, dolar
let nome

nome = prompt("Qual seu nome?")
cotacao_dolar = parseFloat(prompt(`${nome}, quanto está a cotação do dólar?`))
real = parseFloat(prompt(`${nome}, Digite o valor(real) para ser convertido:`))

dolar = real/cotacao_dolar

document.write(`${nome}, você tem U$${dolar}dólares.`)
document.write(`${nome}, você tem R$${real} reais.`)
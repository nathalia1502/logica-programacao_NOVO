let nome
let venda
let juros

nome = prompt("Qual seu nome?")
venda = parseFloat(prompt(`${venda}, qual o valor da venda`))
juros = parseFloat(prompt(`${juros}, qual o valor do juros`))

valor = (venda*juros) + venda

document.write(`${nome}, o valor da conta é ${valor}`)
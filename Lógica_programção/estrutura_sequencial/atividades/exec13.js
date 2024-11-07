let nome
let salario
let aumento

nome = prompt("Qual seu nome?")
salario = parseFloat(prompt(`${salario}, Qual o valor da venda?`))
aumento = parseFloat(prompt(`${aumento}, Qual o valor do juros?`))

total = (salario*aumento) + salario

document.write(`${nome}, O valor da conta é ${total}`)
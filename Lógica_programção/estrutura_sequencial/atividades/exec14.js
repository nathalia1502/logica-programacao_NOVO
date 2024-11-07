let nome 
let salario
let aumento

nome = prompt("qual seu nome?")
salario = parseFloat(prompt(`${salario}, qual o salário?`))
aumento = parseFloat(prompt(`${aumento}, qual o valor do aumento em porcentagem?`))

total = (aumento/100 * salario + salario)

document.write(`${nome} o valor da conta é ${total}`)
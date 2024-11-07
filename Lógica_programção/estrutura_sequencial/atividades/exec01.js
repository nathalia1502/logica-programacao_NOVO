
let nota1
let nota2
let soma

//Float -> 1.6985 | Int -> 1
nota1 = parseInt(prompt("Digite sua nota"))
nota2 = parseInt(prompt("Digite sua nota"))

//2º Processamento
soma = nota1 + nota2

//3º Saída de dados -> concatenação ``(crases) shift + lado P
document.write(`A soma de ${nota1} + ${nota2} = ${soma}`)
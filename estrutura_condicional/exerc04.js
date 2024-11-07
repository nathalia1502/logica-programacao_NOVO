let nota1, nota2, nota3
let nome 
let media

nome = prompt("Qual seu nome?")
nota1 = parseFloat(prompt(`${nome}, digite o valor da primeira nota: `))
nota2 = parseFloat(prompt(`${nome}, digite o valor da segunda nota: `))
nota3 = parseFloat(prompt(`${nome}, digite o valor da terceira nota: `))

media = (nota1+nota2+nota3)/3

if (media>=7){
      document.write(`${nome}, você foi aprovada!!`)

} else{
    document.write(`${nome}, você foi REPROVADO!!`)
}


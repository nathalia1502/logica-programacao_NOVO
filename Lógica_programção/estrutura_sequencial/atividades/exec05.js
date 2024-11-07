let nota1, nota2, nota3
let media

nota1 = parseFloat(prompt(`${nome},Digite a primeira nota`))
nota2 = parseFloat(prompt(`${nome}Digite a segunda nota`))
nota3 = parseFloat(prompt(`${nome}Digite a terceira nota`))

media = (nota1+nota2+nota3)/3
document.write(`${nome} sua media é ${media}`)
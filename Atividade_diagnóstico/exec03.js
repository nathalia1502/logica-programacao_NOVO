let qtdchinchilas, anosFazenda
let totalchinchilas = 1

do {
    qtdchinchilas = parseInt(prompt("Digite as quantidades de chinchilas:"))
    if(qtdchinchilas < 2 || isNaN(qtdchinchilas)){
        alert("Número de chinchilas deve ser maior ou igual a 2")
    }
} while (qtdchinchilas < 2 || isNaN(qtdchinchilas));

do {
    anosFazenda = parseInt(prompt("Digite por quantos anos você irá criar chinchilas"))
    if(anosFazenda < 1 || isNaN(anosFazenda)){
        alert("Tempo de criação inválido")
    }
} while (anosFazenda < 1 || isNaN(anosFazenda));

document.write(`Quantidade chinchilas: ${qtdchinchilas}, tempo de criação: ${anosFazenda}`)

totalchinchilas = qtdchinchilas

for (let i = 2; i <= anosFazenda; i++) {
     totalchinchilas = totalchinchilas * 3
     document.write("<br>" + totalchinchilas) 
}

document.write(`<br> Ao final de ${anosFazenda} você irá tero total de ${totalchinchilas} chinchilas `)
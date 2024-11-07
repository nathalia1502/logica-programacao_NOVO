 //2- Digamos que o número de chinchilas de uma fazenda triplica a cada ano, após o primeiro ano. Elaborar um programa que leia o número inicial de chinchilas e anos e informe ano a ano o número médio previsto de chinchilas da fazenda. Validar a entrada para que o número inicial de chinchilas seja maior ou igual a 2.

let qtdChinchilas, anosFazenda
let totalChinchilas = 1 

do{
    qtdChinchilas = parseInt(prompt("Digite as quantidade de chinchilas"))
    if(qtdChinchilas < 2 || isNaN(qtdChinchilas)){
        alert("Número de chinchilas deve ser maior ou igual a 2")
    }
}while(qtdChinchilas < 2 || isNaN(qtdChinchilas));

do{
    anosFazenda = parseInt(prompt("Digite por quantos anos você irá criar Chinchilas"))
    if( anosFazenda < 2 || isNaN(anosFazenda)){
        alert("Tempo de ciração inválido")
    }
} while ( anosFazenda < 2 || isNaN(anosFazenda));

document.write(`Quantidade Chinchilas: ${qtdChinchilas}, tempo de criação: ${anosFazenda}`)

totalChinchilas = qtdChinchilas

for(let i = 2; i <= anosFazenda; i++){
    totalChinchilas = totalChinchilas * 3
    //totalChinchilas * 3
    document.write("<br>" + totalChinchilas)
}

document.write(`<br> Ao final de ${anosFazenda} você irá ter o total de ${totalChinchilas} Chinchilas`)
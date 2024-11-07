let tempAnual = []
let mediaTemp, acumuladora=0

//tempAnual[0] = Number(prompt("Dígite a temperatura do mês 01"))
//tempAnual[1] = Number(prompt("Dígite a temperatura do mês 02"))
//tempAnual[2] = Number(prompt("Dígite a temperatura do mês 03"))
//tempAnual[3] = Number(prompt("Dígite a temperatura do mês 04"))
//tempAnual[4] = Number(prompt("Dígite a temperatura do mês 05"))

//1°- amarzenar dados na estrutura de dados = ARRAY (vetor)
for(let i = 0; i < 12; i++){
    tempAnual[i] = Number(prompt("Digite a temperatura do mês"))
}
//2°- Mostrar/processar os valores do array de forma individual
for(let i = 0; i<tempAnual.length; i++){
   acumuladora = acumuladora + tempAnual[i]
}
//mediatemp = acumuladora /12
mediaTemp = acumuladora / tempAnual.length
console.log(typeof acumuladora) //number
console.log(typeof 12) //number
console.log(mediaTemp)

document.write(`<p>TempAnual: ${tempAnual}<p/>`)
document.write(`<p>Média da tempAnual: ${mediaTemp}<p/>`)
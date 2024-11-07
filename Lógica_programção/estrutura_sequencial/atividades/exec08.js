let = horas, dias, segundos, minutos
let = nome 

nome = prompt("Digite seu nome ")
hora = parseInt(prompt(`${nome}, são que horas?`))

//cálculo de horas em segundos
segundos = horas * 3600
document.write(`${horas} horas, equivale a ${segundos}segundos <br>`)

//Segundos em minutos
minutos = segundos / 60
document.write(`${segundos} segundos, equivale a ${minutos}minutos <br>`)


//Segundos em Horas
horas = segundos / 3600
document.write(`${segundos} segundos, equivale a ${minutos}minutos <br>`)

//segundos em Dias 
dias = segundos / 86400

document.write(`${segundos} segundos, equivale a ${dias} dias.<br>`)

//Em forma de relógio

document.write("")
document.write(`${dias}d:${horas}h:${minutos}m:${segundos}s`)
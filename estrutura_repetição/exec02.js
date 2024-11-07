/*Elabore um programa que ilustre a 
montagem de uma estrutura de repetição
decrescente, com o valor inicial informado
pelo usuário até o número 1 */

let numero
numero = parseInt(prompt("Digite um número:"))
document.write(`<h2>Decrescente do ${numero} <h2> <br>`)
 
for(let i = numero; i >= 1; i--){
    document.write(`${i} \t <br>`)
}

//Faça um algoritmo para verificar se o número digitado pelo usuário é um número primo//
   //numero primo
//3/1=0   3/2=N  3/3=0
//4/1=0   4/2=0  4/3=n  4/4=0
//5/1=0   5/2=n  5/3=m  5/4=n  5/5=0

let numero,contador = 0
do {
    numero = parseInt("Digite um número para saber se ele é primo")
    if(numero<= 0 || isNaN(numero)){
        alert("Digite um numero inteiro e maior que 0")
    }
} while (numero<= 0 || isNaN(numero));
//essa estrutura vai repetir de 1 até o numero que o usuário digitar
for(let i = 1; i <= numero; i++){
    document.write(`${numero}%{i} = ${numero%i} <br>`)
    //numero que usuário digitou dividido pelo valor i
    if(numero % i === 0){
       contador++  
    }
} 
//Fim da estrutura que vai repetir de 1 até o número que o usuário digitar
if(contador === 2){
    document.write(`O numero ${numero} é primo`)
}else{
    document.write (`O numero ${numero} não é primo`)
}

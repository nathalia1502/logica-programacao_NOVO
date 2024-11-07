 //Elabore um programa que leia um número e verifique se ele é ou não perfeito. Um número dito perfeito é aquele que é igual à soma dos seus divisores inteiros (exceto o próprio número).
let numero
numPerfeito = 0
// 6 -> 6/1= 0   6/2=0   6/3=0   6/4=n   6/5=n  6/6=0
do {
    numero=parseInt(prompt("Digite um número para saber se ele é perfeito"))
    if(numero <=0 || isNaN(numero)){
        alert("Numero digitado inválido")
    }
} while (numero <= 0 || isNaN(numero));

for(let i = 1; i< numero; i++){
   if(numero % i ===0){
    numPerfeito = numPerfeito + 1
   }
}

if(numPerfeito === numero){
    document.write(`O numero ${numero} é um numero perfeito.`)

}else{
    document.write(`O número ${numero} não é um numero perfeito.`)
}
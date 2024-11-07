// Elabore um programa que leia um número N e que indique quantos valores inteiros e positivos devem ser lidos a seguir. Para cada número lido, mostre o valor lido e o fatorial desse valor.

let qtdNumero, numeroEscolhido
do{
    qtdNumero = parseInt(prompt("Quantos números fatoriais você deseja saber"))
    if(qtdNumero <= 0 || isNaN (qtdNumero)){
    alert("Número inválido.")
    }
}while (qtdNumero <= 0 || isNaN(qtdNumero));

for(let i = 0; i<= qtdNumero; i++){
    do{
        qtdNumero = parseInt(prompt("Quantos números fatoriais você deseja saber"))
        if(numeroEscolhido <= 0 || isNaN (qtdNumero)){
        alert("Número inválido.")
        }
    }while (numeroEscolhido <= 0 || isNaN(numeroEscolhido));
    
for(let y = 1; y <= numeroEscolhido; y++ ){
fatorial = fatorial * y 
}
document.write(`Fatorial de ${numeroEscolhido} é ${fatorial}`)
}
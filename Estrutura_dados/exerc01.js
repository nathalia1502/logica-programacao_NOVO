//Dada uma sequência de n números, imprimi-la na ordem inversa à da leitura.

let n,
numeros =[];
do{
    n=Number(prompt("Dígite a quantidade de números"))
    if(n < 0 || isNaN(N)){
        alert("Número inválido")
    }
}while(n <0 || isNaN(n));

for(let i = 0; i < n; i++){
    numeros[i] = Number(prompt("DÍgite o número:")) 
}

document.write(`Vetor: ${numeros}`)

//0:4, 1:5; 2:6 3:7 -> length = 4 - 1 = 3
for(let i = numeros.length - 1; i >= 0; i--){
   document.write(`<p>${numeros[i]}</p>`)
}
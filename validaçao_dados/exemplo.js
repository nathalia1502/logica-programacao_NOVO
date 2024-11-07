let numero1, numero2, validacao
//isNan -> verificar o que foi digitado(texto)

do{
    numero1 = parseInt(prompt("Digite 1º número"))
    if(isNaN(numero1) || numero1 < 0){
        alert("número inválido, digite um valor positivo e maior que 0")
    }
}while(isNaN(numero1) || numero2 < 0){
    console.log(numero1+numero2)
}


do{
    numero1 = parseInt(prompt("Digite 1º número"))
    if(isNaN(numero2) || numero2 < 0){
        alert("número inválido, digite um valor positivo e maior que 0")
    }
}while(isNaN(numero2) || numero2 < 0){
    console.log(numero1+numero2)
}



// numero1 = 't'

//if(isNaN(numero1)){
   // console.log("Digite um número válido")
//}

//console.log(numero1)

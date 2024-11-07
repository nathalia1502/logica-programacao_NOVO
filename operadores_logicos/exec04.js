let ano

ano = parseInt(prompt("Digite um ano: "))

if (ano%4 == 0){
    document.write(`O ano de ${ano} é ano bissexto.`)
}else{
    document.write(`O ano de ${ano} não é ano bissexto.`)
}
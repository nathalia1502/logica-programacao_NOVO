let lado1
let lado2
let lado3

lado1 = parseInt(prompt("Digite o valor do primeiro lado do seu triângulo:"))
lado2 = parseInt(prompt("Digite o valor do segundo lado do seu triângulo:"))
lado3 = parseInt(prompt("Digite o valor do terceiro lado do seu triângulo:"))

if(((lado1+lado2) > lado3) && ((lado1+lado3) > lado2) && (( lado2+ lado3)> lado1)){
    document.write("O seu triângulo é válido.")
} else{
    document.write("O seu triângulo é inválido.")
}

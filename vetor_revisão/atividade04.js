//Faça um programa que preencha dois vetores com dez elementos numéricos cada um e mostre um vetor resultante da intercalação deles.
const vet1 = [1, 3, 5, 7];
const vet2 = [2, 4, 6, 8];
const vet3 = [];

//const vet3 = [vet1[0], vet2[0], vet1[1], vet2[1]]
//           = j0   ,    j1  ,    j2  ,   j3
let j = 0
for(let i = 0; i < 4; i++){
    vet3[j] = vet1[i]
    j++
    vet3[j] = vet2[i]
}
console.log(vet1)
console.log(vet3)
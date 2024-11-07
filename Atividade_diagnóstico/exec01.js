//1° maneira

//let numero = 1

//while(numero != 0){
    //alert("entrou no laço")
   //numero = parseInt(prompt("Digite 0 para sair"))
//}

//2° maneira - continue - break
//for(let i = 1, i<=10; i++){
    //if(i === 5 || i === 8)
       // continue
   // }
   // if(i === 7){
        //break
    //}
 
    alert("Digite 0 para sair do programa")
    let numero;

    do{
        numero = prompt(parseInt("Digite um número:"))
        if(numero === isNaN(numero)){
            //confirmar a saída
            let sair = prompt("confirmar saída")
            if(sair){
                break
            }else{
                continue
            }
        }

        //continuar a lógica par(dobro) e impar(triplo)
        if(numero % 2 === 0){
            alert(`O dobro de ${numero} é: ${numero * 2}`);
        }else{
            alert(`O triplo do número ${numero} é: ${numero * 3}`)
        }
        alert ("Digite 0 para sair do programa")

    }while (true)
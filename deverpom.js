// crie um prompt e peça ao usuário q digite uma nota.
// se a nota for maior q ou igual a 7, imprima "aprovado!"
//se a nota for igual a 5 ou igual a 6, imprima "Recuperação!"
//se a nota for menor q 5, imprima "reprovado!"


let nota =  Number (prompt("Digite sua nota"))


if(nota >=7){
    console.log("Aprovado!");
    
}else if(nota ===5 || nota ===6 ){
    console.log("Recuperação!");
    
}else{
    console.log("Reprovado!");
    
}


//"===": significa extritamente igual
//o else if pode ser usado como: else if(nota >=5)
//pq se ele n passou pela primeira foi pq ela n foi atendida, logo sendo menor q 7
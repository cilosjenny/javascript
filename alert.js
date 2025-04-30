//crie um prompt q peregunte o nome do usuario e mostre um men com duas opções:"1. Dizer olá","2.Sair".
//Se o usuário digitar 1, mostre um "alert" com a mensagem "Olá fulano!".
//Repita o menu até o usuário digitar 2.

let opcoes;


do {
    let nome = prompt("Qual seu noem?")
     opcoes = Number (prompt(`
        Em que posso ajudar? 
        1.Dizer olá
        2.Sair
        `));

     if (opcoes === 1){
        alert(`Olá, ${nome}!`)
     }
    
} while (opcoes !=== 2);

console.log("Saiu!");


//se eu criar a variavel dentro mostra q n esta definida
// let n deixa acessar uma opção dentro de um bloco

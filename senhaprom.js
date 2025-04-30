//Crie um prompt para que o usuário digite uma senha numérica.
//Enquanto a senha for diferente de 1234, exiba um prompt dizendo:"Senha incorreta.Tente novamente."
//Quando for igual a 1234, imprima "Acesso permitido." no console.

//usar while

let senha = Number(prompt("Digite sua senha!"))

while(senha !=== 1234){
    senha = Number(prompt("Senha incorreta.Tente novamente."));
    
}

console.log("Acesso Permitido.");

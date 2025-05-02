//crie uma função chamada somarAte q receba um número positivo
//use um loop for para somar todos os números
//mostre o resultado no console

// o let fica fora do for mas dentro da function pq da errado e sempre volta pro valor colocado na let

function SomarAte(numero) {

    let apanhador = 0

    for (let lili = 0;lili <=numero ; lili++){
       apanhador = apanhador + lili;
         
    }
    console.log(apanhador);
}
SomarAte(5)

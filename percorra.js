//crie uma função q percorra todos os números de 1 a 10.
//Se o número for "par", imprima "número é par", se ñ, " número impar".

verificarSeParOuImpar(1, 10);

function verificarSeParOuImpar(valor1, valor2) {
    for (let numero = valor1; numero <=valor2; numero =
    numero + 1){
        if(numero % 2 === 0){
            console.log(`${numero} é par.` );
            
        }else{
            console.log( `${numero} é impar.` )
        }
    }
}


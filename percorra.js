//crie uma função q percorra todos os números de 1 a 10.
//Se o número for "par", imprima "número é par", se ñ, " número impar".

for (let numero = 1; numero <=10; numero = numero + 1){
    if(nuemro % 2 === 0){
        console.log(`${nuemro} é par.` );
        
    }else{
        console.log( `${nuemro} é impar.` )
    }
      
}
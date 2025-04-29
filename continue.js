//break ele para
//continue, n coloque a anterior e continue o resto(ele precisa de um comando antes para negar)


//EX:
for(let i = 1; i <= 5; i++){
    if (i === 3){
        continue;
    }
    console.log(i);
    
}

//quando ele for estritamente igual a 3, ele pula o 3 e continua

//outro ex:

//se eu tenho uma festa e quero excluir alguem pq n gosto dela
//o comando esta infromando para excluir o matias e continuar a diante

let arr = [ "alex","matias", "yoshi"];

for (let i = 0; i < arr.length; i++){
    if (arr [i]=== "matias"){
        continue;
    }
    console.log(arr[i]);
    
}


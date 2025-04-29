//switch é tipo um if else porem diferente, pois por mais q a primeira for verdadeira, se n tiver um break ele continua executando até achar um break

const cor = "verde"

switch (cor) {
    case "vermelho":
        console.log("Pare1");
        
        break;
     case "amarelo":
            console.log("Atenção");

        break;

      case "verde":
                console.log("Siga!");
                
        break;

    default:
        console.log("Cor inválida!");
        
}


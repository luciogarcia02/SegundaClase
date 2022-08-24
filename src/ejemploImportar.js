
module.exports() = {
    name : "prueba",

    dameNumero(valor){
        let valorDevolver;
        let valorComparar=valor.toUpperCase();
        
       if(valorComparar=="STRING"){
        valorDevolver="hola";
       }else if(valorComparar=="INT"){
        valorDevolver="1";
       }else if(valorComparar=="FLOAT"){
        valorDevolver="1.5";
       }else{
        throw new Error('La opcion no es valida')
       }
       return valorDevolver;
    }
    
}
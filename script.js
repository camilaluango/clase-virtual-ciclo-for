let num // numeros a ingresar
let contP = 0 // esta variable contara los numeros positivos
let contN = 0 // esta variable contara los numeros negativos
let contM = 0 // esta variable contara los multiplos de 15

for(let i = 1; i<=5; i++){ //el ciclo se repetira 5 veces paa que yo pueda ingresar 5 numeros diferentes
    num = parseInt(prompt("ingrese un numero")) //le pide al usuario el ingreso de los numeros
        if((num % 15) === 0){ // se hace este primero y a parte para que no se vea afectado por el resto de condiciones
           // se usa para saber si los numeros son divisibles entre 15 sin dejar residuo. lo hacemos utilizando el operador de módulo (%), que devuelve el residuo de una división. Si el residuo es 0, significa que el número es múltiplo de 15.
            contM++} // almacena en cada ciclo
        
        if(num>0){ //con este sabremos si el numero es positivo si resulta ser mayor a 0
            contP++ // almacena en cada ciclo
        }else if(num<0){ ////con este sabremos si el numero es negativo si resulta ser menor a 0
            contN++ // almacena en cada ciclo
        }
            
   
}    
document.write(`la cantidad de valores negativos ingresados es: ${contN} <br>` ) //muestra el resultado del total de negativos
document.write(`la cantidad de valores positivos ingresados es: ${contP} <br>` )  //muestra el resultado del total de positivos
document.write(`la cantidad de valores multiplos de 15 ingresados son: ${contM}` )  //muestra el resultado del total de multiplos de 15


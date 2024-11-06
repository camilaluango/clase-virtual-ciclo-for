let num 
let contP = 0
let contN = 0
let contM = 0

for(let i = 1; i<=5; i++){
    num = parseInt(prompt("ingrese un numero"))
        if((num % 15) === 0){
            contM++}
        
        if(num>0){
            contP++
        }else if(num<0){
            contN++
        }
            
   
}    
document.write(`la cantidad de valores negativos ingresados es: ${contN} <br>` )
document.write(`la cantidad de valores positivos ingresados es: ${contP} <br>` )
document.write(`la cantidad de valores multiplos de 15 ingresados son: ${contM}` )


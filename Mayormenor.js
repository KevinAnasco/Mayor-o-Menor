var num1 = 0;
var num2 = 0;
var suma = 0;

for (i = 1; i <=3 ; i++) {
    
    num1 = parseFloat(prompt("Ingrese el Numero 1 "));
    num2 =  parseFloat(prompt("Ingrese el Numero 2 "));

    if(num1 > num2 ){

        suma = (num1 + num2);
        alert("La suma de "+num1+" y "+num2 +" es igual a "+suma);
    
        }
        
        else if (num1 < num2){
            
            var potesuma = (Math.pow(num1,2)+ (Math.pow(num2,2)));
            alert(+num1 +" Se elevo a (2) "+num2 + " Se elevo a (2) y se sumo todo dando un resultado de " +potesuma )
       
        }  

    else {(num1 == num2)

        alert("Los numeros son iguales :)")

    }
}
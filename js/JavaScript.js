//prompt("Pon tu nombre aqui")


// esto le pide al usuario que de su nkmbre 
// let nombreUsuario = prompt("Por favor, introduzca su nombre");
//console.log(nombreUsuario);

//confirm("¿Desea un trato personalizado?")

let tratoPersonalizado = confirm("¿Desea un trato personalizado?")

if(tratoPersonalizado){
    let nombre = prompt("Por favor, introduzca su nombre");
    alert("Le damos la bienvenida a nuestro sitio "+ nombre +". ¡Muchas     gracias por visitarnos, estamos a su disposición! ?");
} else {
    alert("Gracias por ${conectarse}.")
}

let nombres = ["Sofia", "Marcos", "Pedro"]

nombres.forEach(nombre => console.log("Hola, " + nombre));

let numeros = [1,2,3,4,5]
suma = 0;

for ( let i = 0; i<=numeros.length ; i++){
    suma += i
    console.log(suma)
 
}

numeros.forEach(numero => {
    suma += numero
    console.log(suma)
})

 
// var: variables en javascript, pueden almacenar datos/información
//      y pueden utilizarse en todo el documento
// palabras reservadas en javascript (keywords), 
//      son palabras que no puedes utilizar para nombrar variables o funciones
var libre
var numero = 10
var palabra = 'hola'
var decimales = 10.0

numero = 20
numero = 40

// posiciones de la colección       
//               0   1   2     3      4
var arreglo = [1, '0', 10.5, false, true]

// console.log: Imprimir mensajes en la consola del inspector del navegador web 

// Acceso a valores en un arreglo []
console.log(arreglo[2])
console.log(arreglo[4])

// Diccionario, otro tipo de colección
// llave (cadena) : valor (dinámico)
// 
var diccionario = {
    "nombre": "Eduardo",
    edad: 30,
    correo: "edu@eml.run",
    status: true,
    photo: null // null, otro tipo de valor, es un valor vacío
}

// Diccionario - Catalogo
var CHANNELS = {
    WHATSAPP: "wa",
    EMAIL: "mail",
    TELEPHONE: "tel",
    GITHUB: "gh"
}

// Acceso a valores en un diccionario {}
console.log(diccionario.correo)
console.log(diccionario.target)

// function <nombre_funcion>() { }
// Una función es un bloque de código que contiene
// instrucciones específicas 
// y cuando se ejecuta, 
// se ejecutan las instrucciones del bloque

// Las funciones tienen capacidad de:
//  * recibir parametros (opcional)
//  * retornar un resultado (opcional)
function linkDeContacto(event) {

    // Console.log con multiples parametros
    // imprime multiples parametros en consola del inspector del navegador

    // const: otro tipo de contenedor en javascript
    //          y tiene la particularidad de ser una constante,
    //          es decir, no se le puede reasignar un valor
    const dataset = event.target.dataset

    // Control de Flujo
    // IF - Condicional
    // if, si sucede la expresión/condición, va a ejecutar lo que se encuentre adentro del if

    // Expresiones se pueden componenr de varios operadores
    if (dataset.channel === CHANNELS.WHATSAPP) {
        const url = 'https://wa.me/'+dataset.value
        window.open(url)
        return // utiliza return para finalizar el flujo de la función
    }

    if (dataset.channel === CHANNELS.EMAIL) {
        console.log('mandar correo')
    }

    if (dataset.channel === CHANNELS.TELEPHONE) {
        console.log('intentar hacer llamada')
    }

    if (dataset.channel === CHANNELS.GITHUB) {
        console.log('mandar a cuenta de github')
    }

}



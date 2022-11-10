// Functions

function greet ( name: string ){  /* Se declara tipo del parametro */
    console.log(`Hola, ${name}`)
}
greet("Diego");

// Return de funcion no explicita

function getNumber () {
    return Math.floor( Math.random() * 100 );
}/* Inferencia automatica de getNumber por TypeScript, funcion del tipo Number */

// Return de funcion explicita

function getNumber2():number {
    return Math.floor( Math.random() * 100 );
}/* Inferencia explicita de tipo number */

// Funciones con parametros de propiedades opcionales o unions

function greet2( identity: { name?: string, lastName: string | null } ):void {
    console.log( `Hola ${identity.name} ${identity.lastName}` );
}

// Funciones con parametros con valor por defecto

function greet3( name:string = "Diego" ):void {
    console.log(`Hola ${name}`);
}

greet3( "Diego" );  // -> Hola Diego
greet3();           // -> Hola Diego
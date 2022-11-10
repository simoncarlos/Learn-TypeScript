// Tipos Basicos
let myTypeString: string = "Hello world!";
let myTypeNumber: number = 23;
let myTypeBoolean: boolean = true;

// Arrays
let arrNumber: number[] = [1 ,2 ,3 ,4];
let arrNumber2: Array<number> = [1, 2, 3, 4];
let arrStrings: string[] = ["texto1", "texto2"];
let arrAny: any[] = ["texto1", 23, true];

//Tuple
let tuplePlayers: [string, number, boolean] = ["Doncic", 2, true];

//Tuple Array
let players: [number, string][];

players= [
    [10, "Messi"],
    [11, "Di Maria"],
    [9, "Lautaro Martinez"]
];

// Por inferencia de tipos de typescript se asigna el tipo de valor a la variable segun el valor inicial que se le asigna

let myVariable;      // -> variable de tipo any(puede ser cualquiera)
myVariable = 5       // -> variable de tipo number

let myVariable2: string  = "texto";     // -> Se declara el tipo de variable previamente
let myVariable3 = "texto";              // -> Se detecta automaticamente el tipo de variable

// Tipo Unions: variable que puede ser de dos o mas tipos

let myVariableUnions: string | number | null ;

/* Anotacion: investigar Generics, Unions, Enums y Objects */
// Type assertion

let channel : any = "DiegoSimon";

/* Casteo de variables a tipo string */

let channelStr = <string>channel;
let channelStr2 = channel as string;

const myCanvas = document.getElementById("main") as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main");
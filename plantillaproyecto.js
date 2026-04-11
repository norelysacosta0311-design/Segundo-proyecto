let username = "";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calcularPuntaje(vidasRestantes) {
    let puntos = vidasRestantes * 100;
    console.log("Tu puntaje final es: " + puntos);
    return puntos;
}


function getUserInput(question) {
    return new Promise((resolve) => {
        rl.question(question + " ", (answer) => {
            resolve(answer);
        });
    });
}



const listaDePalabras = [

    { palabra: "OTORRINOLARINGOLOGO", pista: "Profesión médica." },
    { palabra: "PROGRAMACION", pista: "Arte de darle intrucciones a una computadora." },
    { palabra: "MUSICA", pista: "Se compone de elementos clave como ritmo, armonía, timbre y melodía." },
    { palabra: "SUEÑO", pista: "Estado de reposo involuntario del cuerpo." }
];


const seleccion = listaDePalabras[Math.floor(Math.random() * listaDePalabras.length)];
const palabraSecreta = seleccion.palabra;
const pistaActual = seleccion.pista;


let vidas = 5;
let acertadas =[];


function saludarJugador(nombre, pistaParaMostrar){

  console.log("Bienvenido/a "+nombre+" al ahorcado, tienes "+vidas+" vidas para completar la palabra.")
  console.log("Pista: "+pistaParaMostrar );
}


startGame();

async function startGame(){
    

saludarJugador("Norelys", pistaActual );


function generarespacios(palabra){

  return palabra.split('').map (letra => acertadas.includes(letra) ? letra : "_").join(' ');
  
}

let resultadoFinal = generarespacios (palabraSecreta);
console.log(resultadoFinal);

while (vidas > 0){
  let progreso = generarespacios(palabraSecreta);
  console.log("Palabra " +progreso);
  console.log("Vidas restantes:" +vidas);

  if (!progreso.includes("_")){
    let puntajeFinal = calcularPuntaje(vidas);
    break;
  }

  let intento = (await getUserInput("Introduce una letra:")).toUpperCase() .trim();

  if (intento.length !== 1 || !/^[A-ZÑ]$/.test(intento)) {
    console.log("Entrada no válida. Por favor, introduce solo UNA letra (sin números ni símbolos).");
    continue; 
     }

  if (palabraSecreta.includes(intento) && !acertadas.includes(intento)){
    console.log ("¡Acertaste!");
    acertadas.push(intento);
  
  }

  else if (acertadas.includes(intento)){
    console.log ("Ya habias adivinado esa letra.");
  }

else {
  vidas--;
 console.log ("Fallaste, te quedan "+vidas+" vidas.");

  if (vidas === 1){
    console.log("¡Cuidado! Te queda un solo intento.");
  }
    
}
}

if (vidas === 0){
  console.log ("GAME OVER. La palabra era: "+palabrasecreta);
}

    return rl.close(); 
}
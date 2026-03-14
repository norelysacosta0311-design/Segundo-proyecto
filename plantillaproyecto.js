// version 1.0.0

// No borrar ni modificar las constantes y variables que ya están declaradas, ya que son necesarias para el funcionamiento del juego.
// Simplemente comenta las líneas indicadas más abajo una vez hagas las pruebas del funcionamiento del código inicial.

let username = "";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



// ------------------- Función para pedir datos al usuario ----------------------
// Esta función se encarga de obtener la entrada del usuario a través de la consola. 
// Toma una pregunta como argumento, la muestra al usuario y espera su respuesta. 
// Una vez que el usuario ingresa su respuesta, la función devuelve esa respuesta como una cadena de texto.
function getUserInput(question) {
    return new Promise((resolve) => {
        rl.question(question + " ", (answer) => {
            resolve(answer);
        });
    });
}

//-------------------- Fin del código Espacio Educa ----------------------

// Recuerda que debes seguir las instrucciones del proyecto para completar el juego.
// Y no borres el código que ya está escrito, ya que es necesario para el funcionamiento del juego.
// Solo comenta las líneas indicadas más arriba.

// Get ur coffee and Empieza a codear!!

// Declara las variables que necesitas para el juego antes de llamar a la función startGame.

// Luego llama a la función startGame para iniciar el juego.

const palabrasecreta = "OTORRINOLARINGOLOGO"
let vidas = 5;
let acertadas =[];



startGame();

async function startGame(){
    // Aquí va la lógica principal del juego.

function saludarJugador(nombre){

  console.log("Bienvenido "+nombre+" al ahorcado, tienes "+vidas+" vidas para completar la palabra. Pista: Profesión médica. ¡Buena suerte!")
}
saludarJugador("Norelys");


function generarespacios(palabra){

  return palabra.split('').map (letra => acertadas.includes(letra) ? letra : "_").join('');
  
}

let resultadoFinal = generarespacios ("OTORRINOLARINGOLOGO");
console.log(resultadoFinal);

while (vidas > 0){
  let progreso = generarespacios(palabrasecreta);
  console.log("Palabra " +progreso);
  console.log("Vidas restantes:" +vidas);

  if (!progreso.includes("_")){
    let puntajeFinal = calcularPuntaje(vidas);
    break;
  }

  let intento = (await getUserInput("Introduce una letra:")).toUpperCase();

  if (palabrasecreta.includes(intento) && !acertadas.includes(intento)){
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

    return rl.close(); // Linea que hace que el programa se cierre una vez termine el juego. No la borres ni comentes.
}
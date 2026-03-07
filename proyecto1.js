const palabrasecreta = "OTORRINOLARINGOLOGO"
let vidas = 5;
let acertadas =[];

function saludarJugador(nombre){

  console.log("Bienvenido "+nombre+" al ahorcado, tienes "+vidas+"para completar la palabra. Pista: Profesión médica. ¡Buena suerte!")
}
saludarJugador("Norelys");


function generarespacios(palabra){

  return palabra.split('').map (letra => acertadas.includes(letra) ? letra : "_").join('');
  
}
let resultadoFinal = generarespacios ("OTORRINOLARINGOLOGO");
console.log(resultadoFinal);

while (vidas > 0){
  let progreso = generarespacios(palabrasecreta);
  console.log("Palabra" +progreso);
  console.log("Vidas restantes:" +vidas);

  if (!progreso.includes("_")){
    let puntajeFinal = calcularPuntaje(vidas);
    break;
  }

  let intento = prompt("Introduce una letra:").toUpperCase();

  if (palabrasecreta.includes(intento) && !acertadas.includes(intento)){
    alert("¡Acertaste!");
    acertadas.push(intento);
  
  }

  else if (acertadas.includes(intento)){
    alert("Ya habias adivinado esa letra.");
  }

else {
  vidas--;
 alert("Fallaste, te quedan "+vidas+" vidas.");

  if (vidas === 1){
    console.log("¡Cuidado! Te queda un solo intento.");
  }
    
}
}

if (vidas === 0){
  alert("GAME OVER. La palabra era:"+palabrasecreta);
}

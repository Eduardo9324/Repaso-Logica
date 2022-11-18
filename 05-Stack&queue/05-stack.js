const { Stack, Queue } = require("../estructuras");

// Utilizando un STACK, y dado un string, invertir el orden de las palabras.
// OJO: Para este ejercicio NO se pueden usar metodos de Array.
// Deben utilizar solo los metodos provistos por la STACK

// Parametro:
//  (String): string con un texto cargado de palabras

// Salida:
// > string con el mismo texto, el mismo orden, pero con las palabras invertidas.

// Ejemplo:
//   Colombia Argentina: aibmoloC anitnegrA
//   Mar Azulado oro : raM odaluzA oro

function efectoEspejo(str) {
  //tu codigo aqui
  let newStack = new Stack();
  let invertedText = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      while (newStack.size()) {
        invertedText += newStack.pop();
      }
      invertedText += " ";
    } else {
      newStack.push(str[i]);
    }
  }
  while (newStack.size()) {
    invertedText += newStack.pop();
  }
  return invertedText;
}
module.exports = {
  efectoEspejo,
};

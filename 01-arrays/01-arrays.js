function invertirOrden(array) {
  // Invertir el orden de los elementos del array que recibe por parametro
  // Que los ultimos elementos, pasen a ser los primeros
  //
  // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
  // No vale usar el metodo "reverse"
  let ordenInvertido = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 10) {
      continue;
    } else {
      ordenInvertido.unshift(array[i]);
    }
  }
  return ordenInvertido;
}

function numeroEnComun(array1, array2) {
  // Entre los dos array's que recibe la funcion por parametro
  // Buscar y retornar el valor en comun entre ellos
  var num1;
  var num2;
  for (var i = 0; i < array1.length; i++) {
    num1 = array1[i];
    for (var j = 0; j < array2.length; j++) {
      num2 = array2[j];
      if (num1 === num2) {
        return num1;
      }
    }
  }
  var pequeño1 = array1[0];
  var pequeño2 = array2[0];
  for (var k = 0; k < array1.length; k++) {
    if (array1[k] < pequeño1) {
      pequeño1 = array1[k];
    }
  }
  for (var l = 0; l < array2.length; l++) {
    if (array2[l] < pequeño2) {
      pequeño2 = array2[l];
    }
  }
  if (pequeño1 < pequeño2) {
    return pequeño1;
  } else {
    return pequeño2;
  }
}

function sumaDeArrays(array) {
  // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
  // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
  // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
  // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
  var nuevoArreglo = [];

  for (let i = 0; i < array.length; i++) {
    var miSuma = 0;
    if (typeof array[i] === "object") {
      array[i].forEach(function (x) {
        miSuma += x;
      });
      nuevoArreglo.push(miSuma);
    } else {
      nuevoArreglo.push(array[i]);
    }
  }
  return nuevoArreglo;
}

function mismoValorMismosElementos(numero, divisor) {
  // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
  // Todos los elementos deben tener el mismo valor
  // OJO: Si el resultado de la division no es un entero, deben devolver false
  let arreglo = [];
  var i = 0;
  var resultado = numero / divisor;
  if (numero % divisor !== 0) return false;

  while (divisor > i) {
    arreglo.push(resultado);
    i++;
  }
  return arreglo;
}

function elementoMenorYMayor(array) {
  // El Array recibido por props es un array que contienen numeros
  // Tenes que retornar un array
  // Solamente con el elemento menor y mayor del array recibido
  var nuevoArreglo = [];
  var mayor = array[0];
  var menor = array[0];

  for (var i = 0; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i];
    } else if (array[i] > mayor) {
      mayor = array[i];
    }
  }
  nuevoArreglo.push(menor, mayor);
  return nuevoArreglo;
}

module.exports = {
  numeroEnComun,
  invertirOrden,
  elementoMenorYMayor,
  sumaDeArrays,
  mismoValorMismosElementos,
};

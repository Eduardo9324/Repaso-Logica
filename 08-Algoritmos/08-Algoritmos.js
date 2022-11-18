"use strict";

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const orderValue = array[j];
        array[j] = array[j + 1];
        array[j + 1] = orderValue;
      }
    }
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let present;
  for (let i = 1; i < array.length; i++) {
    present = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > present) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = present;
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let positionOne = array[0];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        positionOne = array[i];
        array[i] = array[j];
        array[j] = positionOne;
      }
    }
  }
  return array;
}

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;

  let piv = array[0];
  let min= [];
  let max = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < piv) {
      min.push(array[i]);
    } else {
      max.push(array[i]);
    }
  }
  return quickSort(min).concat(piv).concat(quickSort(max));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  mergeSort,
};

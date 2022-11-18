const { LinkedList, Node } = require("../estructuras")
  //agregar el metodo size al prototipo de LinkedList.
  // Este metodo deberia retornar la cantidad de elementos de la lista
LinkedList.prototype.size = function () {
  return this.len;
  }


// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [3]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [1]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
LinkedList.prototype.orderList = function () {
  // Tu código aca:
  let num1;
  let num2;

  if (this.head === null) {
    return false;
  } else {
    num1 = this.head;
    while (num1.next) {
      num2 = num1.next;
      while (num2) {
        if (num1.value < num2.value) {
          const auxi = num1.value;
          num1.value = num2.value;
          num2.value = auxi;
        }
        num2 = num2.next;
      }
      num1 = num1.next;
    }
  }
};

  //agregar el metodo insert al prototipo de LinkedList.
  // Este metodo deberia recibir una posicion y un valor
  // agregar el valor en la posicion indicada
  //tomar el head como posicion 1  
  
    
LinkedList.prototype.insert = function (data, pos) {
  if (this.len < pos && pos - this.len === 1) return this.add(data); //preguntar

  let newNode = new Node(data);
  let num1 = this.head;

  if (pos === 1) {
    newNode.next = num1;
    this.head = newNode;
    this.len++;
    return;
  }

  while (pos - 1 > 1) {
    pos--;
    num1 = num1.next;
  }

  newNode.next = num1.next;
  num1.next = newNode;
  this.len++;
}
  




module.exports={
  LinkedList
}




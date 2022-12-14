const { BinarySearchTree } = require("../estructuras");

// En el prototipo de BinarySearchTree crear la funcion search que debe recibir un parametro y buscarlo en el arbol
// si lo encuentra, debe retornar el nodo. En caso contrario retornar el mensaje correspondiente.
// Ejemplo      (10)
//             /     \
//          (7)     (12)
//         /  \      /  \
//      (2)  (9)  (11)  (15)
BinarySearchTree.prototype.search = function (value) {
  if (this.value === value) return this.value;
  if (this.left !== null && value <= this.value) return this.left.search(value); // pregunta <= y >=
  if (this.right !== null && value >= this.value) return this.right.search(value);
  else return "no se encontrĂ³ el valor";
};
// En el prototipo de BinarySearchTree crear la funcion height que debe retornar la altura del mismo (cantidad de niveles)
// Ejemplo      (10)           ----> nivel 0
//             /     \
//          (7)     (12)       ----> nivel 1
//         /  \      /  \
//      (2)   (9)  (11)  (15)   ----> nivel 2

BinarySearchTree.prototype.height = function () {
    if (this.left === null && this.right === null) return 0;
    if (this.left === null) {
        return 1 + this.right.height();
    } else if (this.right === null) {
        return 1 + this.left.height();
    } else {
        return 1 + Math.max(this.left.height(), this.right.height());
    }
}

module.exports = {
  BinarySearchTree,
};

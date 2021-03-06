'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.insert = function(value){
  if (value > this.value || value === this.value){
    if(!this.right){
      this.right = new BinarySearchTree(value);
    }else {
      this.right.insert(value)
    }
  }
  if(value < this.value){
    if(!this.left){
      this.left = new BinarySearchTree(value)
    }else {
      this.left.insert(value)
    }
  }
};

BinarySearchTree.prototype.contains = function(value){
  if (value === this.value) return true;

  if (value > this.value){
    if(!this.right){
      return false;
    }else {
     return this.right.contains(value) 
    }
  }
  if (value < this.value){
    if(!this.left){
      return false;
    }else {
      return this.left.contains(value)
    }
  }  
};

BinarySearchTree.prototype.size = function(){
  if(!this.right && !this.left) return 1;

  if(this.right && !this.left) return 1 + this.right.size();
  
  if(this.left && !this.right) return 1 + this.left.size();
  
  if(this.right && this.left) return 1 + this.right.size() + this.left.size();
};

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  //order = in order
  //order = pre order
  //order = post order
  if(order === 'pre-order'){ // root, left, right
    cb(this.value);
    if(this.left) this.left.depthFirstForEach(cb, order);
    if(this.right) this.right.depthFirstForEach(cb, order);
  }
  else if( order === 'post-order'){ // left, rigth, root
    if(this.left) this.left.depthFirstForEach(cb, order);
    if(this.right) this.right.depthFirstForEach(cb, order);
    cb(this.value);
  }else {// in order = 
    if(this.left) this.left.depthFirstForEach(cb, order);
    cb(this.value);
    if(this.right) this.right.depthFirstForEach(cb, order);
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, cache=[]){
  if(this.left){
  cache.push(this.left)
  }   
  if(this.right){
    cache.push(this.right)
  }
  cb(this.value)
   
  if(cache.length > 0){
    cache.shift().breadthFirstForEach(cb, cache);
  }
};

let peopleAge = new BinarySearchTree(5);
peopleAge.insert(4)
peopleAge.insert(8)
console.log(peopleAge.contains(8))
console.log(peopleAge.size())


console.log(peopleAge)
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};

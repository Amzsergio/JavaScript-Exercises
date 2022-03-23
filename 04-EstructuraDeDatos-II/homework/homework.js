'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.head = null;
}


function Node(value){
  this.value = value;
  this.next = null;
}

// agregar al principio
// agregar al final
// agregar en el medio segun alguna condicion
// agregar un elemento en la posicion x

LinkedList.prototype.add = function(value){
  let node = new Node(value);

  let current = this.head;
  if(!current){ // if(current === null)
    this.head = node;
    return node
  } 
  
  while(current.next){
    current = current.next;
  } 
  
  current.next = node;
  return node;

}

// Eliminar al principio
// Eliminar al final
// Eliminar en el medio segun alguna condicion
// Eliminar un elemento en la posicion x
LinkedList.prototype.remove = function(){
  
  let current = this.head;

  if(!current) return current;
  else if(current.next === null) {
    let removed = current.value;
    this.head = null;
    return removed;
  }

  while(current.next.next){
    current = current.next
  }
  let removed = current.next.value;
  current.next = null;
  return removed  
}

LinkedList.prototype.search = function(value){
  
  if(!this.head) return null;
  let current = this.head;
  while(current){
      if(current.value === value) return current.value;
      if(typeof value == 'function'){
        if (value(current.value)){
          return current.value;
        }
      }
      current = current.next
  }
  return null;
}
// var animalList = new LinkedList();
//  animalList.add('cat')
//  animalList.add('dog')
//  animalList.add('bear')
//  console.log(animalList)
//  console.log(animalList.search(function(nodeValue){return nodeValue === 'bear'}))

// -------------------------------------------------------------------------------------
// Take care 
// RETURN A LIST ---> new LindedList
// MODIFY A LIST ---> between aux and current do something (No devuelvo nada)
// NO DEVUELVO NADA 
// ---------------------------------------------------------------------------------------





// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function(key){
  let sum = 0;
  for(let i=0; i<key.length; i++){
    sum += key.charCodeAt(i)
  }
  return sum%this.numBuckets;
}
HashTable.prototype.set = function(key, value){
  if(typeof key !== 'string' ) throw new TypeError('Keys must be strings');
  let save = this.hash(key)

  if(this.buckets[save] === undefined){
    this.buckets[save] = {};
  }
  this.buckets[save][key] = value; 
}
HashTable.prototype.get = function(key){
  let save = this.hash(key);
  return this.buckets[save][key]
}

HashTable.prototype.hasKey = function(key){
  let save = this.hash(key);
  if(this.buckets[save]){
    if(this.buckets[save].hasOwnProperty(key)){
      return true
    }else {return false}
  }
  return false
}

let hashTable = new HashTable();
console.log(hashTable.numBuckets)
hashTable.set('Ana', 5345452)
console.log(hashTable.get('Ana'))
console.log(hashTable.hasKey('Ana'))




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};

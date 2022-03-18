/*
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function(a, b, c) {
    b = a;
    console.log(b); // 8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 9
}
c(8,9,10);
console.log(b); // 10
console.log(x); // 1


// ------------------------------------------------------------------
// In the next link I've created a conceptual drawing describing step by step.
// This was made by me.  
// https://excalidraw.com/#json=Z-9R4MsALxQSP9PBffk-r,rx9_PCACctusyMU3tpplgg
*/
//-----------------------------------------------------------------
/*
console.log(bar); // Undifined, because it's being printed before initialize the variable. 
console.log(); // Error variable is not declared, this is because undeclared variables are not hoisted. 
foo(); // ---> Then it does not matter where the function is invoked, however a good coding practice is invoking them in the end. 
function foo() { console.log('Hola!'); }// This will be printed since the functions declarations are hoisted ---->
var bar = 1;
console.log(bar)
baz = 2;
*/
//-----------------------------
/*
var instructor = "tony";
if("I'm true") { // Here in the if it is going to evaluate only in a boolean way. 
  var instructor = "Franco";
}
console.log(instructor);
*/
//-----------------------------

// var instructor = "Tony";
// console.log(instructor); //Tony
// (function() {
//    if(true) {
//       var instructor = "Franco";
//       console.log(instructor); // Franco
//    }
// })();
// console.log(instructor); // Tony

//-----------------------------
/*
var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor); // The Flash
  console.log(pm);// Reverse Flash
}
console.log(instructor);// The Flash, this differs from pm variable, since Let is limited to the statement block
console.log(pm);// Franco 
*/

//---------------------------------------
/*
6 / "3"// 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // '$45'
"4" - 2// 2
"4px" - 2 // NAN
7 / 0 // infinity
{}[0] // Undifined
parseInt("09") // 9
5 && 2// 2
2 && 5// 5
5 || 0 // 5
0 || 5 // 0
[3]+[3]-[10] //23 
3>2>1 // false
[] == ![]  // True
// Since == checks for object identity (and not for object equality) and the two arrays are two different instances, the result is true           
*/
//---------------------------------------------

// function test() {
//   console.log(a); // Undifined
//   console.log(foo()); // 2 

//   var a = 1;
//   function foo() {
//      return 2;
//   }
// }

// test();

//------------------------------------

// var snack = 'Meow Mix';

// function getFood(food) {
//     if (food) {
//         var snack = 'Friskies'; 
//         return snack; // 
//     }
//         return snack; // undifined
// }

// console.log(getFood(false));

//---------------------

// var fullname = 'Juan Perez';
// var obj = {
//    fullname: 'Natalia Nerea',
//    prop: {
//       fullname: 'Aurelio De Rosa',
//       getFullname: function() {
//          return this.fullname;
//       }
//    }
// };

// console.log(obj.prop.getFullname());// Aurelio De Rosa

// var test = obj.prop.getFullname;  

// console.log(test()); // Juan Perez


// -------------------------------------------

function printing() {
  console.log(1);
  setTimeout(function() { console.log(2); }, 1000);
  setTimeout(function() { console.log(3); }, 0);
  console.log(4);
}

printing(); // 1 , 4, 3, 2

//----------------------------
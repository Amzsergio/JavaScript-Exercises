'use strict'
var num = 1101
BinarioADecimal(num);
function BinarioADecimal(num) {
   /* 
  var array =  number into an array
var reversedArray = []
	for ( var digit = 0; array.length > 0; digit++) 
		var deleted = array.pop	
		reversedArray.push(deleted)
		
var add = 0
	for (var digit = 0; digit < reversedArray.length; digit++)
		add =+ reversedArray[i] * (Math.pow(2, i))
		
				1		8
		
return add  */
/* var suma = 0

for(let i = 0; i < num.length; i++) {
  suma = suma + num[i] * 2 ** (num.length - 1 - i);
}
return suma; */


let sum = 0; 
for (let i = 0; i < num.length; i++) {
    sum += num[i] * 2 ** (num.length - 1 - i);
}
return sum;


  // tu codigo aca

/*   var array = String(num).split("").map((num) => {
    return Number(num)
  })
  var reversedArray = []
    for(var digit = 0; array.length > 0 ; digit++){
      reversedArray.push(array.pop()) 
    }
  var add = 0
    for(var digit = 0; digit < reversedArray.length; digit++){
      add += reversedArray[digit] * (Math.pow(2, digit))

    }

  return add */
 
}

function DecimalABinario(num) {
  // tu codigo aca

  var array = []

  for (var division = 0; num >= 1; division++){
    array.unshift(num%2)
    num = Math.floor(num/2)
 }
  var decimal = array.join('')

  return decimal
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
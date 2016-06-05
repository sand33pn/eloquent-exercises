function reverseArray(array){
  var newArray = [];
  for(var i = 0; i < array.length; i++)
    newArray.push(array[((array.length-1) - i)]);
  return newArray;
}

function reverseArrayInPlace(array){
  for(var head = 0, tail = array.length-1; head < tail; head++, tail--){
    var temp    = array[head];
    array[head] = array[tail];
    array[tail] = temp;
  }
}

console.log(reverseArray(["A", "B", "C", "D"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

function deepEqual(a, b){
  if(a === b)
    return true;
  
  if(a == null || b == null)
    return false;
  
  if(typeof a == "object" && typeof b == "object"){
    var noOfPropsInA = 0;
    var noOfPropsInB = 0;
    for(var prop in a)
      noOfPropsInA++;
    for(var prop in b){
      noOfPropsInB++;
      if(!(prop in a) || !deepEqual(a[prop], b[prop]))
        return false;
    }
    return noOfPropsInA == noOfPropsInB;
  }
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

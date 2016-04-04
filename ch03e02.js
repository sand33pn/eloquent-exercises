function isEven(n){
  if(n < 0)
    return null;
  if(n == 1)
    return false;
  if(n == 0)
    return true;
  return isEven(n-2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → null

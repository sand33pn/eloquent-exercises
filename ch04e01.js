function range(start, end, step){
  var range = [];
  var abs_diff = Math.abs(start-end);
  
  if(step == undefined){
    if(start <= end)
      step = 1;
    else
      step = -1;
  }
  
  for(var i =0; i <= abs_diff;){
    range.push(start);
    start += step;
    i += Math.abs(step);
  }
  
  return range;
}

function sum(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++)
    sum += arr[i];
  return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

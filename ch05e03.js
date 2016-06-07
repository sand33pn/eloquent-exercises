function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.
var byCentury = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

for(var century in byCentury){
  var ages = byCentury[century].map(function(person){
    return person.died - person.born;
  });
  console.log(century + ": " + average(ages));
}

function groupBy(array, grouping){
  var groups = [];
  array.forEach(function(element){
    var groupName = grouping(element);
    if(groupName in groups)
      groups[groupName].push(element);
    else
      groups[groupName] = [element];
  });
  return groups;
}
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var diff = ancestry.map(function(person){
  if(byName[person.mother])
    return person.born - byName[person.mother].born;
  return null;
}).filter(function(diff){
  return diff != null;
});

console.log(average(diff));
// → 31.2

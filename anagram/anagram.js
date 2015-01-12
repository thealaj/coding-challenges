
anagram = function(entry){

this.entry = entry;

this.matches = function(array) {
  var successes = [];

  if array !

  array.forEach(function(value) {
    if (value.toLowerCase() != this.entry.toLowerCase()) {
      if (value.toLowerCase().split("").sort().join("") === this.entry.toLowerCase().split("").sort().join("")) {
          successes.push(value);
        }
    }
  });
return successes;
};


  return this;

}

module.exports = anagram;

anagram = function(entry){

this.entry = entry;

this.matches = function(array) {
  var successes = [];

  array.forEach(function(value) {
    if (value.split("").sort().join("") === this.entry.split("").sort().join("")) {
          successes.push(value);
        }

  });
return successes;
};


  return this;

}

module.exports = anagram;
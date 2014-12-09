
var words = function() {};

words = function(input) {
  input_array = input.split(/\s/)
  word_hash = {}
  for (var i = 0; i < input_array.length; i++) {
    if (word_hash[input_array[i]] && typeof word_hash[input_array[i]] != "function") {
    word_hash[input_array[i]] += 1
  } else {
    word_hash[input_array[i]] = 1
  }
  }
  return word_hash
};

module.exports = words;

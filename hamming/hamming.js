var Hamming = function() {};



var Hamming = function() {};

Hamming.compute = function(strand1, strand2) {
  diff = 0
  var strand1_arr = strand1.split("")
  var strand2_arr = strand2.split("")

  if (strand1_arr.length != strand2_arr.length) {
    throw 'DNA strands must be of equal length.'
  } else {
    strand1_arr.forEach(function(value, index){
      if (value !== strand2_arr[index]){
        diff += 1;
      }
    });
      return diff;
   };

}



module.exports = Hamming;
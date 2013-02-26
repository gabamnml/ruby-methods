// Ruby = 5.times { |i| puts i }
// JS   = (1).times(function(i){console.log(i);})
Number.prototype.times = function(cb) {
  var i = -1;
 
  while (++i < this) {
    cb(i);
  }
 
  return +this;
}
 
// Ruby = 1.upto(5) { |i| puts i }
// JS   = (1).upto(5, function(i){console.log(i);})
Number.prototype.upto = function(t, cb) {
  var i = this;
 
  if(t < this) return +this;
 
  while (i <= t) {
    cb(i++);
  }
 
  return +this;
};
 
// Ruby = 15.downto(10) { |i| puts i }
// JS   = (15).downto(10, function(i){console.log(i);})
Number.prototype.downto = function(t, cb) {
  var i = this;
 
  if(t > this) return +this;
 
  while (i >= t) {
    cb(i--);
  }
 
  return +this;
};

// Ruby = [4, 5, 6].each { |element| puts "#{element}" }
// JS = [4, 5, 6].each(function(index) { alert(index + ": " + this); })
Array.prototype.each = function(func) {
  function each(array, func) {
  for (var i=0; i<array.length; ++i) {
    func.call(array[i], i);
  }
}
 each(this, func); 

};
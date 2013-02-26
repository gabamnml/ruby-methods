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
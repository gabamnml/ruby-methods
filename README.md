# Use Ruby methods in JavaScript

```
Ruby = 5.times { |i| puts i }
JS   = (1).times(function(i){console.log(i);})
```

```
Ruby = 1.upto(5) { |i| puts i }
JS   = (1).upto(5, function(i){console.log(i);})
```

```
Ruby = 15.downto(10) { |i| puts i }
JS   = (15).downto(10, function(i){console.log(i);})
```

```
Ruby = [4, 5, 6].each { |element| puts "#{element}" }
JS = [4, 5, 6].each(function(index) { console.log(index + ": " + this); })
```
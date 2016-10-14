// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {
  sumOfPrimes: function(a) {
    function prime_numbers(number){
    var arr = [];
    for (var item = 1; item <= number; item++){
      if (item ===2 || item ===3 || item ===5 || item ===7){
        arr.push(item);
      }
      else if(item ===1 || item % 2 === 0 || item % 3 === 0 || item % 5 === 0|| item % 7 === 0){
        continue;
      
      }
      
      else {
        arr.push(item);
        }
  }
  return arr
}
  },
  
    }
    console.log("Returning the value");
    return true
  }
}
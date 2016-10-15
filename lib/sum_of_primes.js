// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {
  sumOfPrimes: function(number) {
    if (number <= 1 || typeof number !== 'number' ){
      return 'Invalid Input'
    }

    var arr = [];
    for (var item = 2; item <= number; item++){
      if (item ===2 || item ===3 || item ===5 || item ===7){
        arr.push(item);
      }
      else if(item % 2 === 0 || item % 3 === 0 || item % 5 === 0|| item % 7 === 0){
        continue;
      
      }
      
      else {
        arr.push(item);
      }
    }
    var sum = arr.reduce(function(prev, curr){return prev + curr},0);
    return sum;
  }

}
  
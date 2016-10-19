// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {
  sumOfPrimes: function(number) {
      
    if (number <= 1 || typeof number !== 'number' ){
      return 'Invalid Input'
    }
    var arr = [];
    var primenos = [];
    for(var i = 2; i <= number; i++) {
        primenos[i] = true;
    }
    var sqroot = Math.sqrt(number);
    for(var i = 2; i <= sqroot; i++) {
        if(primenos[i] === true) {
            for(var j = i * i; j <= number; j += i) {
                primenos[j] = false;
            }
        }
    }
    for(var i = 2; i <= number; i++) {
        if(primenos[i] === true) {
            arr.push(i);
        }
    }
    var sums = arr.reduce(function(prev, curr){ return prev + curr},0);
    return sums;
  }
}

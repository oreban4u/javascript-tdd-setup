'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');

describe("Test that sum of primes works", function() {
  it("should return 17 for the input 8", function() {
    assert(lib.sumOfPrimes(8) == 17);
  });

  it("should return 28 for the input 11", function(){
    assert(lib.sumOfPrimes(11) == 28);

  });
  it("should return 5 for the input 3", function(){
    assert(lib.sumOfPrimes(3) == 5);

  });
  it("should return 2 for the input 2", function(){
    assert(lib.sumOfPrimes(2) == 2);

  });
  it("should return 'Invalid input' for the input {}", function(){
    assert(lib.sumOfPrimes({}) == "Invalid Input");

  });
  it("should return 'Invalid Input' for array input", function(){
    assert(lib.sumOfPrimes([4,5]) == "Invalid Input");

  });
  it("should return 'Invalid Input' for the input -5", function(){
    assert(lib.sumOfPrimes(-5) == 'Invalid Input');

  });
  it("should return 'Invalid Input' for string input", function(){
    assert(lib.sumOfPrimes('') == 'Invalid Input');

  });
  it("should return 'Invalid Input' for the input 0", function(){
    assert(lib.sumOfPrimes(0) == 'Invalid Input');

  });
  it("should return 'Invalid Input' for the input 1", function(){
    assert(lib.sumOfPrimes(1) == 'Invalid Input');

  });
});


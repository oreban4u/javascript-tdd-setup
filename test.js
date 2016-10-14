'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');

describe("Test that sum of primes works", function() {
  it("should give 17 for the input 8", function() {
    assert(lib.sumOfPrimes(8) == 17);
    }

  it("should give 28 for the input 11", function(){
    assert(lib.sumOfPrimes(11) == 28);

  }
  it("should give 5 for the input 3", function(){
    assert(lib.sumOfPrimes(3) == 5);

  }
  it("should give 2 for the input 2", function(){
    assert(lib.sumOfPrimes(2) == 2);

  }
  it("should give 5 for the input 4", function(){
    assert(lib.sumOfPrimes(4) == 5);

  }
  it("should give 17 for the input 7", function(){
    assert(lib.sumOfPrimes(7) == 17);

  }
  it("should give 10 for the input 5", function(){
    assert(lib.sumOfPrimes(-5) == false);

  }
  it("should give 41 for the input 13", function(){
    assert(lib.sumOfPrimes('') == false);

  }
  it("should give 0 for the input 0", function(){
    assert(lib.sumOfPrimes(0) == false);

  }
  it("should give 0 for the input 1", function(){
    assert(lib.sumOfPrimes(1) == false);

  }
}


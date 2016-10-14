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
  
}


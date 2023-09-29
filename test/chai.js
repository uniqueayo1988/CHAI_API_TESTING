const chai = require('chai');

// expect
const expect = chai.expect;

// should
const should = chai.should();

// assert TDD style. no chaining possible
const assert = chai.assert;

// expect API examples
let a = 1, b = 1;
// let a = 1, b = 2;

expect(a).to.be.equals(b, 'a and b are not equal');
a.should.be.equals(b);
assert.equal(a, b, 'a and b are not equal');

// object/string/boolean
function myObj() {
  return {
    a: 100,
    b: 'hello'
  }
}

x = new myObj(); y = new myObj();

expect(x).to.be.an('object');
// expect(x).to.be.equals(y, 'x and y are not equal');

// deep.equal or deep.equals
expect(x).to.be.deep.equals(y, 'x and y are not equal');
(x).should.be.deep.equals(y, 'x and y are not equal');
assert.deepEqual(x, y, 'x and y are not equal');

// chaining expressions
// x is an object; x and y are equal
// keywords - and, with, but...
expect(x).to.be.an('object').and.to.be.deep.equals(y, 'x and y are not equal');
(x).should.be.an('object').and.to.be.deep.equals(y, 'x and y are not equal');

// arrays
let numbers = [1, 2, 3, 0]
expect(numbers).to.be.an('array').that.includes(1);
(numbers).should.be.an('array').that.includes(1);
assert.isArray(numbers, 'numbers is not array');

// should - BDD style Chai interface. expect is also BDD style
// The main difference is that should extends each object with a should property to start the chain.
// assert - TDD style



// It is always a good practice to use a or an to check target type before performing assertion on it. 
// This will avoid unexpected behavior or errors that may occur when performing the assertions on the target type. So, chaining helps in such scenarios.
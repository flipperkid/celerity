var setUpPage = function() {
  console.log('set up page');
};

var tearDownPage = function() {
  console.log('tear down page');
};

var setUp = function() {
  console.log('set up');
};

var tearDown = function() {
  console.log('tear down');
};

var testHi = function() {
  onsole.log('hi');
};

var testBye = function() {
  console.log('bye');
};

define(function (require) {
  var testInterface = require('../closureInterface');
  testInterface.registerSuite('hello tests');
});


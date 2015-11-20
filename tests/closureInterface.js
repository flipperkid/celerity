define([
  'node_modules/dojo/aspect',
  'intern',
  'intern/lib/Suite',
  'intern/lib/Test'
], function (aspect, intern, Suite, Test) {
  return {
    registerSuite: function(name) {
      intern.executor.register(function (suite) {
        Object.getOwnPropertyNames(global).forEach(function(val) {
          var fn = global[val];
          if (val.substring(0, 4) === 'test') {
            suite.tests.push(new Test({ name: val, test: fn, parent: suite }));
          } else if (val === 'setUpPage') {
            aspect.before(suite, 'setup', fn);
          } else if (val === 'tearDownPage') {
            aspect.before(suite, 'teardown', fn);
          } else if (val === 'setUp') {
            aspect.before(suite, 'beforeEach', fn);
          } else if (val === 'tearDown') {
            aspect.before(suite, 'afterEach', fn);
          }
        });
      });
    }
  };
});


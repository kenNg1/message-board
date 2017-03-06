define('qanda/tests/components/new-answer.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/new-answer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/new-answer.js should pass jshint.\ncomponents/new-answer.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/new-answer.js: line 3, col 3, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/new-answer.js: line 6, col 7, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/new-answer.js: line 9, col 7, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n4 errors');
  });
});
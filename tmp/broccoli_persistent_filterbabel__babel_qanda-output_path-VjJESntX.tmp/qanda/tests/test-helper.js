define('qanda/tests/test-helper', ['exports', 'qanda/tests/helpers/resolver', 'ember-qunit'], function (exports, _qandaTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_qandaTestsHelpersResolver['default']);
});
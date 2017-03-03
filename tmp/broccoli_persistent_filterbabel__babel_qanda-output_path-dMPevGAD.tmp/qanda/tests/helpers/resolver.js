define('qanda/tests/helpers/resolver', ['exports', 'qanda/resolver', 'qanda/config/environment'], function (exports, _qandaResolver, _qandaConfigEnvironment) {

  var resolver = _qandaResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _qandaConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _qandaConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
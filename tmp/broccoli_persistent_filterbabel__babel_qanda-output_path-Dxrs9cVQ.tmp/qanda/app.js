define('qanda/app', ['exports', 'ember', 'qanda/resolver', 'ember-load-initializers', 'qanda/config/environment'], function (exports, _ember, _qandaResolver, _emberLoadInitializers, _qandaConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _qandaConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _qandaConfigEnvironment['default'].podModulePrefix,
    Resolver: _qandaResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _qandaConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
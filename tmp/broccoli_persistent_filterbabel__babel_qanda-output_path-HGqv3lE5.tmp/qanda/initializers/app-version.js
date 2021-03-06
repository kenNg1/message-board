define('qanda/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'qanda/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _qandaConfigEnvironment) {
  var _config$APP = _qandaConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
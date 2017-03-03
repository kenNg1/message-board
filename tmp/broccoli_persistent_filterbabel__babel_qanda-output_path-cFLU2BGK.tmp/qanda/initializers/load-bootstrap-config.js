define('qanda/initializers/load-bootstrap-config', ['exports', 'qanda/config/environment', 'ember-bootstrap/config'], function (exports, _qandaConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_qandaConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('qanda/helpers/app-version', ['exports', 'ember', 'qanda/config/environment'], function (exports, _ember, _qandaConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _qandaConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
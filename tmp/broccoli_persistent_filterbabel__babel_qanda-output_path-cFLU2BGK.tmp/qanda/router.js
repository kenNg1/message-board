define('qanda/router', ['exports', 'ember', 'qanda/config/environment'], function (exports, _ember, _qandaConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _qandaConfigEnvironment['default'].locationType,
    rootURL: _qandaConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('contact');
    this.route('about');
    this.route('question', { path: '/question/:question_id' });
  });

  exports['default'] = Router;
});
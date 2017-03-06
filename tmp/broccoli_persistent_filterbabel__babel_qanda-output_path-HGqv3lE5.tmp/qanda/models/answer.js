define('qanda/models/answer', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        author: _emberData['default'].attr(),
        content: _emberData['default'].attr(),
        question: _emberData['default'].belongsTo('question', { async: true }),
        up: _emberData['default'].attr(),
        votedup: _emberData['default'].attr(),
        down: _emberData['default'].attr(),
        voteddown: _emberData['default'].attr()
    });
});
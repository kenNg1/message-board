define('qanda/components/new-answer', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    addNewAnswer: false,
    actions: {
      answerFormShow: function answerFormShow() {
        this.set('addNewAnswer', true);
      },
      saveAnswer: function saveAnswer() {
        var params = {
          author: this.get('author'),
          content: this.get('content'),
          question: this.get('question'),
          up: 0,
          votedup: false,
          down: 0,
          voteddown: false
        };
        this.set('addNewAnswer', false);
        this.sendAction('saveAnswer', params);
      }
    }
  });
});
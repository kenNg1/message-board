define('qanda/components/new-question', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    addNewQuestion: false,
    actions: {
      questionFormShow: function questionFormShow() {
        this.set('addNewQuestion', true);
      },
      saveQuestion: function saveQuestion() {
        var params = {
          heading: this.get('heading'),
          author: this.get('author'),
          notes: this.get('notes')
        };
        this.set('addNewQuestion', false);
        this.sendAction('saveQuestion', params);
      }
    }
  });
});
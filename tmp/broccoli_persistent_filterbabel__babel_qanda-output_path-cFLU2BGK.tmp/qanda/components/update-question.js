define('qanda/components/update-question', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    updateQuestionForm: false,
    actions: {
      updateQuestionForm: function updateQuestionForm() {
        this.set("updateQuestionForm", true);
      },
      update: function update(question) {
        var params = {
          heading: this.get('heading'),
          author: this.get('author'),
          notes: this.get('notes')
        };
        this.set("updateQuestionForm", false);
        this.sendAction('update', question, params);
      }
    }
  });
});
define('qanda/components/question-detail', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        updateQuestionForm: false,
        actions: {
            'delete': function _delete(question) {
                if (confirm('Are you sure you want to delete this question?')) {
                    this.sendAction('destroyQuestion', question);
                }
            },
            update: function update(question, params) {
                this.sendAction('update', question, params);
            }
        }
    });
});
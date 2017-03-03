define('qanda/routes/question', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model(params) {
            return this.store.findRecord('question', params.question_id);
        },
        actions: {
            destroyQuestion: function destroyQuestion(question) {
                question.destroyRecord();
                this.transitionTo('index');
            },
            update: function update(question, params) {
                question.save();
                this.transitionTo('index');
            },
            saveAnswer: function saveAnswer(params) {
                var newAnswer = this.store.createRecord('answer', params);
                var question = params.question;
                question.get('answers').addObject(newAnswer);
                newAnswer.save().then(function () {
                    return question.save();
                });
            }
        }
    });
});
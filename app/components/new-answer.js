import Ember from 'ember';

  export default Ember.Component.extend({
    addNewAnswer: false,
    actions: {
      answerFormShow() {
        this.set('addNewAnswer', true);
      },
      saveAnswer() {
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

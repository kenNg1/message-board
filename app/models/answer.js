import DS from 'ember-data';

export default DS.Model.extend({
    author: DS.attr(),
    content: DS.attr(),
    question: DS.belongsTo('question',{async:true}),
    up: DS.attr(),
    votedup: DS.attr(),
    down: DS.attr(),
    voteddown: DS.attr()
  });

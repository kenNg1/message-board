define('qanda/components/answer-tile', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        actions: {
            'delete': function _delete(answer) {
                if (confirm('Are you sure you want to delete this answer?')) {
                    this.sendAction('destroyAnswer', answer);
                }
            },

            thumbs_up: function thumbs_up(answer) {
                this.set('answer.up', +this.get('answer.up') + 1);
                this.set('answer.votedup', true);
                var check = this.get('answer.voteddown');
                if (check == true) {
                    this.set('answer.down', +this.get('answer.down') - 1);
                    this.set('answer.voteddown', false);
                    answer.save();
                }
                answer.save();
            },
            undo_thumbs_up: function undo_thumbs_up(answer) {
                this.set('answer.up', +this.get('answer.up') - 1);
                this.set('answer.votedup', false);
                answer.save();
            },
            thumbs_down: function thumbs_down(answer) {
                this.set('answer.down', +this.get('answer.down') + 1);
                this.set('answer.voteddown', true);
                var check = this.get('answer.votedup');
                if (check == true) {
                    this.set('answer.up', +this.get('answer.up') - 1);
                    this.set('answer.votedup', false);
                    answer.save();
                }
                answer.save();
            },
            undo_thumbs_down: function undo_thumbs_down(answer) {
                this.set('answer.down', +this.get('answer.down') - 1);
                this.set('answer.voteddown', false);
                answer.save();
            }
        }
    });
});
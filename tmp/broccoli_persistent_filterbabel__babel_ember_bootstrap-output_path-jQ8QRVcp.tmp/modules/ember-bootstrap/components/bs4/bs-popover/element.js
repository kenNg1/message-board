import Ember from 'ember';
import PopoverElement from 'ember-bootstrap/components/base/bs-popover/element';

export default PopoverElement.extend({
  classNameBindings: ['placementClass', 'showHelp:show'],

  placementClass: Ember.computed('placement', function () {
    var placement = this.get('placement');

    return 'popover-' + placement;
  })
});
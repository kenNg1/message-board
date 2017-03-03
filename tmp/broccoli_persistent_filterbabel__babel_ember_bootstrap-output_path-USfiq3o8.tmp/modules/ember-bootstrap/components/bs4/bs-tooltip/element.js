import Ember from 'ember';
import TooltipElement from 'ember-bootstrap/components/base/bs-tooltip/element';

var computed = Ember.computed;

export default TooltipElement.extend({
  classNameBindings: ['placementClass', 'showHelp:show'],

  placementClass: computed('placement', function () {
    var placement = this.get('placement');

    return 'tooltip-' + placement;
  }).readOnly()
});
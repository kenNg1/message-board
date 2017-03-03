import Ember from 'ember';
import FormGroup from 'ember-bootstrap/components/base/bs-form/group';

var computed = Ember.computed;

export default FormGroup.extend({
  classNameBindings: ['hasFeedback'],

  classTypePrefix: 'form-group',

  _validationType: computed.readOnly('validation')
});
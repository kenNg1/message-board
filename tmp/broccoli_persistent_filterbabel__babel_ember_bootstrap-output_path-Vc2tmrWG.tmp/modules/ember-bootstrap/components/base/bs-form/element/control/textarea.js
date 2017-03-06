import Control from '../control';

/**

 @class FormElementControlTextarea
 @namespace Components
 @extends Components.FormElementControl
 @private
 */
export default Control.extend({
  attributeBindings: ['value', 'name', 'placeholder', 'autofocus', 'disabled', 'readonly', 'required', 'tabindex', 'minlength', 'maxlength', 'autocomplete', 'form', 'spellcheck', 'rows', 'cols', 'wrap'],
  tagName: 'textarea',
  classNames: ['form-control'],

  change: function change(event) {
    this.get('onChange')(event.target.value);
  },

  input: function input(event) {
    this.get('onChange')(event.target.value);
  }
});
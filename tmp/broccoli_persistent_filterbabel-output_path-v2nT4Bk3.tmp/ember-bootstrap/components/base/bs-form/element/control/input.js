define('ember-bootstrap/components/base/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/base/bs-form/element/control'], function (exports, _emberBootstrapComponentsBaseBsFormElementControl) {
  'use strict';

  /**
  
   @class FormElementControlInput
   @namespace Components
   @extends Components.FormElementControl
   @private
   */
  exports['default'] = _emberBootstrapComponentsBaseBsFormElementControl['default'].extend({
    attributeBindings: ['value', 'type', 'name', 'placeholder', 'autofocus', 'disabled', 'readonly', 'required', 'size', 'tabindex', 'minlength', 'maxlength', 'min', 'max', 'pattern', 'accept', 'autocomplete', 'autosave', 'inputmode', 'multiple', 'step', 'form', 'spellcheck'],
    tagName: 'input',
    classNames: ['form-control'],

    /**
     * @property type
     * @type {String}
     * @public
     */
    type: 'text',

    change: function change(event) {
      this.get('onChange')(event.target.value);
    },

    input: function input(event) {
      this.get('onChange')(event.target.value);
    }

  });
});
define('ember-bootstrap/components/base/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/base/bs-form/element/control'], function (exports, _emberBootstrapComponentsBaseBsFormElementControl) {
  'use strict';

  /**
  
   @class FormElementControlTextarea
   @namespace Components
   @extends Components.FormElementControl
   @private
   */
  exports['default'] = _emberBootstrapComponentsBaseBsFormElementControl['default'].extend({
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
});
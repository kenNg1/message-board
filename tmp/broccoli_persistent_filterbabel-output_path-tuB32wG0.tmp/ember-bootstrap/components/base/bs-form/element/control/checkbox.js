define('ember-bootstrap/components/base/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/base/bs-form/element/control'], function (exports, _emberBootstrapComponentsBaseBsFormElementControl) {
  'use strict';

  /**
  
   @class FormElementControlCheckbox
   @namespace Components
   @extends Components.FormElementControl
   @private
   */
  exports['default'] = _emberBootstrapComponentsBaseBsFormElementControl['default'].extend({
    attributeBindings: ['value:checked', 'type', 'name', 'autofocus', 'disabled', 'readonly', 'required', 'tabindex', 'form'],
    tagName: 'input',

    /**
     * @property type
     * @type {String}
     * @readonly
     * @private
     */
    type: 'checkbox',

    click: function click(event) {
      this.get('onChange')(event.target.checked);
    }
  });
});
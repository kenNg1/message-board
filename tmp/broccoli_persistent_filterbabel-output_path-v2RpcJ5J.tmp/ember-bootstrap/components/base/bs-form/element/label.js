define('ember-bootstrap/components/base/bs-form/element/label', ['exports', 'ember', 'ember-bootstrap/templates/components/bs-form/element/label'], function (exports, _ember, _emberBootstrapTemplatesComponentsBsFormElementLabel) {
  'use strict';

  /**
  
   @class FormElementLabel
   @namespace Components
   @extends Ember.Component
   @private
   */
  exports['default'] = _ember['default'].Component.extend({
    layout: _emberBootstrapTemplatesComponentsBsFormElementLabel['default'],
    tagName: '',

    /**
     * @property label
     * @type string
     * @public
     */
    label: null,

    /**
     * @property invisibleLabel
     * @type boolean
     * @public
     */
    invisibleLabel: false,

    /**
     * @property formElementId
     * @type {String}
     * @public
     */
    formElementId: null,

    /**
     * @property labelClass
     * @type {String}
     * @public
     */
    labelClass: null
  });
});
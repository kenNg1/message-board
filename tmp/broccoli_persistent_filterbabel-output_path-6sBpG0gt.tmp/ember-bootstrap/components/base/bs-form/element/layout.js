define('ember-bootstrap/components/base/bs-form/element/layout', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  /**
  
   @class FormElementLayout
   @namespace Components
   @extends Ember.Component
   @private
   */
  exports['default'] = _ember['default'].Component.extend({
    tagName: '',

    /**
     * @property formElementId
     * @type {String}
     * @public
     */
    formElementId: null,

    /**
     * @property hasLabel
     * @type boolean
     * @public
     */
    hasLabel: true,

    /**
     * @property errorsComponent
     * @type {Ember.Component}
     * @public
     */
    errorsComponent: null,

    /**
     * @property feedbackIconComponent
     * @type {Ember.Component}
     * @public
     */
    feedbackIconComponent: null,

    /**
     * @property labelComponent
     * @type {Ember.Component}
     * @public
     */
    labelComponent: null
  });
});
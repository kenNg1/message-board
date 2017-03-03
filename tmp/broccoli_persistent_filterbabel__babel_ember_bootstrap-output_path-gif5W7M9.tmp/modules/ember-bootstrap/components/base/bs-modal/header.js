import Ember from 'ember';
import layout from 'ember-bootstrap/templates/components/bs-modal/header';

/**

 Modal header element used within [Components.Modal](Components.Modal.html) components. See there for examples.

 @class ModalHeader
 @namespace Components
 @extends Ember.Component
 @public
 */
export default Ember.Component.extend({
  layout: layout,
  classNames: ['modal-header'],

  /**
   * Show a close button (x icon)
   *
   * @property closeButton
   * @type boolean
   * @default true
   * @public
   */
  closeButton: true,

  /**
   * The title to display in the modal header
   *
   * @property title
   * @type string
   * @default null
   * @public
   */
  title: null,

  /**
   * @event onClose
   * @public
   */
  onClose: function onClose() {}

});
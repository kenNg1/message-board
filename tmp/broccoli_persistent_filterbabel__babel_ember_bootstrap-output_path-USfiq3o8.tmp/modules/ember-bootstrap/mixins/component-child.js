import Ember from 'ember';
import ComponentParentMixin from 'ember-bootstrap/mixins/component-parent';

var computed = Ember.computed;

/**
 * Mixin for components that act as a child component in a parent-child relationship of components
 *
 * @class ComponentChild
 * @namespace Mixins
 * @private
 */
export default Ember.Mixin.create({

  /**
   * The parent component
   *
   * @property _parent
   * @private
   */
  _parent: computed(function () {
    return this.nearestOfType(ComponentParentMixin);
  }),

  /**
   * flag to check if component has already been registered
   * @property _didRegister
   * @type boolean
   * @private
   */
  _didRegister: false,

  /**
   * Register ourself as a child at the parent component
   * We use the `willRender` event here to also support the fastboot environment, where there is no `didInsertElement`
   *
   * @method _registerWithParent
   * @private
   */
  _registerWithParent: function _registerWithParent() {
    if (!this._didRegister) {
      var _parent = this.get('_parent');
      if (_parent) {
        _parent.registerChild(this);
        this._didRegister = true;
      }
    }
  },

  /**
   * Unregister from the parent component
   *
   * @method _unregisterFromParent
   * @private
   */
  _unregisterFromParent: function _unregisterFromParent() {
    var parent = this.get('_parent');
    if (this._didRegister && parent) {
      parent.removeChild(this);
      this._didRegister = false;
    }
  },

  didReceiveAttrs: function didReceiveAttrs() {
    this._super.apply(this, arguments);
    this._registerWithParent();
  },

  willRender: function willRender() {
    this._super.apply(this, arguments);
    this._registerWithParent();
  },

  willDestroyElement: function willDestroyElement() {
    this._super.apply(this, arguments);
    this._registerWithParent();
  }
});
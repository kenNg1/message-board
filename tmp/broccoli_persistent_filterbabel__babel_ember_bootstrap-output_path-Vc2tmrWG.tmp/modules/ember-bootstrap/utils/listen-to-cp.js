import Ember from 'ember';

var computed = Ember.computed;
var getWithDefault = Ember.getWithDefault;

/**
 * CP macro that listens to dependent (external) property, but allows overriding it locally without violating DDAU
 * By using a simple setter it will still trigger on changes of the dependent property even when being set before.
 *
 * Kudos to @fsmanuel for coming up with this solution.
 *
 * @method
 * @return {boolean}
 * @param {string} dependentKey
 * @param {*} defaultValue
 * @private
 */
export default function (dependentKey) {
  var defaultValue = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  return computed(dependentKey, {
    get: function get() {
      return getWithDefault(this, dependentKey, defaultValue);
    },
    set: function set(key, value) {
      // eslint-disable-line no-unused-vars
      return value;
    }
  });
}
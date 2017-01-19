angular.module('sharedDropdown').factory('sharedDropdownFactoryCore',
function sharedDropdownFactoryCore(sharedInstantiatorFactory, sharedSingleSelectFactory) {
    function Dropdown() {
        var placeholder = 'Select an option';
        var disable = false;
        this.placeholder = function getSetPlaceholder(value) {
            if (value !== undefined) {
                if (typeof value === 'string') {
                    placeholder = value;
                } else {
                    throw new Error([
                        'sharedDropdownInstance.placeholder:',
                        'Expecting a string parameter, but was passed a ',
                        (typeof value)
                    ].join(' '));
                }
            }
            return placeholder;
        };
        this.disable = function (value) {
            if (value !== undefined) {
                disable = value;
            }
            return disable;
        };
    }
    return function factory(items, options) {
        var obj;
        var placeholder;
        var disable;
        var opts = angular.extend({}, options || {});
        if (options && options.placeholder) {
            delete options.placeholder;
            delete options.disable;
        }
        Dropdown.prototype = sharedSingleSelectFactory(items, options);
        obj = new Dropdown;
        return sharedInstantiatorFactory(obj, opts);
    };
});

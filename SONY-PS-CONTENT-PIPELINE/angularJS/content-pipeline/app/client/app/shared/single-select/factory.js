angular.module('sharedSingleSelect').factory('sharedSingleSelectFactory',
function sharedSingleSelectFactory(sharedOptionsFactory, sharedInstantiatorFactory) {
    function SingleSelect() {
        var selected;
        var update;
        this.select = angular.bind(this, function select(value) {
            // If a value is provided, update the selected item.
            if (value) {
                selected = value;

                // On update, this function will be run.
                if (typeof update === 'function') {
                    update(this);
                }
            }

            // Always return the object based on the selected value property.
            return this.list().filter(function filter(item) {
                return item.value === selected;
            })[0] || {};
        });
        this.update = function onSelect(value) {
            if (value) {update = value;}
            return update;
        }
    }
    return function factory(list, options) {
        var singleSelect;
        SingleSelect.prototype = sharedOptionsFactory.call(factory.arguments);
        singleSelect = new SingleSelect;
        return sharedInstantiatorFactory(singleSelect, angular.extend({
            list: list
        }, options), [
            'list',
            'select'
        ]);
    };
});

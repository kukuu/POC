angular.module('sharedOptions').factory('sharedOptionsFactory',
function sharedOptionsFactory(sharedInstantiatorFactory) {
    var validOptions = ['placeholder', 'select'];
    function Options() {
        var list;
        var selected;
        this.list = function getSetList(obj) {
            // Exception
            if (obj !== undefined) {
                if (typeof obj !== 'object') {
                    throw new Error([
                        'sharedOptionsFactory.list: Can only be passed an object.',
                        (typeof obj),
                        'found.'
                    ].join(' '));
                }
                // Array list expected
                list = [];
                angular.forEach(obj, function forEachProperty(label, value) {
                    list.push({
                        value: value,
                        label: label
                    });
                });
            }
            return list;
        };

        // Select Function
        this.list({});
        this.select = function select(value) {
            if (value) {
                selected = value;
            }
            return list.filter(function filter(item) {
                return item.value === selected;
            })[0] || {};
        };
    }
    return function factory(items, options) {
        var obj = new Options;
        if (items) {
            obj.list(items);
        }
        return sharedInstantiatorFactory(obj, options || {}, validOptions);
    };
});

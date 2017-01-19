angular.module('conceptProposal').service('conceptProposalServiceField',
function conceptProposalServiceField() {
    function Field() {
        // Data appearing in getter/setter functions.
        var data = {
            name: '',
            required: false,
            triggerUpdate: false,
            visible: false,
            value: undefined,
            label: ''
        };

        // Special interception functions where setting requires special behaviour.
        var set = {
            value: function value(_value) {
                // When a field value is set, if the field has triggerUpdate set,
                // an update must be sent to the API.
                return _value;
            },
            required: function required(_value) {
                if ([true, false].indexOf(_value) === -1) {
                    throw new Error([
                        'conceptProposalServiceField.Field instance.required:',
                        'Argument must be boolean, found',
                        (typeof _value)
                    ].join(' '));
                }
                return _value;
            }
        };

        // Sets up all the getter/setter functions based on the data properties.
        Object.keys(data).forEach(angular.bind(this, function setup(prop) {
            set[prop] = set[prop] || function interceptor(_value) { return _value; };
            this[prop] = function getterSetter(_value) {
                if (_value !== undefined) {
                    data[prop] = set[prop](_value);
                }
                return data[prop];
            };
        }));

        this.messages = function messagesGetter() {
            return {
                validation: function validationGetter() {
                    return [];
                }
            };
        };
    }
    this.Field = Field;
    this.create = function create(name, options) {
        var field = new Field;
        field.name(name);
        if (options) {
            [
                'value',
                'label',
                'visible',
                'triggerUpdate',
                'required'
            ].forEach(function forEach(prop) {
                field[prop](options[prop]);
            });
        }
        return field;
    };
});

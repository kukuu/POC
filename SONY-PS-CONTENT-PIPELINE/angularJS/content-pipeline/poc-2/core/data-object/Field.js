/*
*   Field Object
*   -This field object base object for all the field.
*/
angular.module('poc').service('Field',
    function Field() {

        var Field = function(fieldParams) {

            this._objectType = 'FieldObject';

            this.fieldCode = '';
            this.value = null;
            this.visible = false;
            this.triggerUpdate = false;

            this.empty = function() {
                return (this.value);
            };

            this.updateProperty = function(fieldParams) {
                angular.extend(this, fieldParams);
            };

            this.updateProperty(fieldParams);

            // this._value;
            // this.value = function(val) {
            //     this._value = val;
            //     // console.log('VALUE', this._value);
            //     return this._value;
            // }

            // this.list = [];
            // Object.defineProperty(this, 'value', {
            //     // value: 42,
            //     writable: true,
            //     // what:'99',
            //     get: function() {
            //         // console.log('PRABU', this.what);
            //         // return this.what;
            //         // var returns = [];
            //         // angular.forEach(this.list, angular.bind(this, function(item) {
            //         //     if(item.selected){
            //         //         returns.push(item);
            //         //     }
            //         // }));
            //         return this.what;
            //     },
            //     set : function(_value) {
            //         this.what = _value;
            //     }
            // });
        }

        return Field;
    }
);
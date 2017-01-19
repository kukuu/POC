'use strict';
/*
*   Radiobutton Object
*   -This Radiobutton object provides all funational behaviour for 'radio button'.
*/
angular.module('poc').factory('RadioButonObject',
    function RadioButonObject() {

        function RadioButonObject(data) {

            this._objectType = 'RadioButonObject';

            this.list = [];
            angular.forEach(data, angular.bind(this, function(item) {
                var listItem = {label:item, id:0, value: item};
                this.list.push( listItem );
            }));

            var methods = {
                // test: function() {
                //     console.log('test');
                // }
            }

            angular.extend(this, methods);
        };

        return RadioButonObject

    }
);

'use strict';
/*
*   Dropdown Object
*   -This Dropdown object provides all funational behaviour for 'dropdown button'.
*/
angular.module('poc').factory('DropdownObject',
    function DropdownObject() {

        function DropdownObject(data) {

            this._objectType = 'DropdownObject';

            this.list = [];
            angular.forEach(data, angular.bind(this, function(item) {
                console.log(item, typeof item );
                if(typeof item == 'object')  {
                    item.label = item.name;
                } else {
                    item =  {label:item, id:0, value: item};
                }

                this.list.push( item );
            }));

            this.value = [];
            this.model = function(item) {
                // this.value.push(item);
                // console.log('LOL===', this.value);
            }

            // Object.defineProperty(this, 'value', {
            //     // value: 42,
            //     // writable: true,
            //     what:'99',
            //     get: function() {
            //         console.log('PRABU', this.what);
            //         return this.what;
            //     },
            //     set : function(val) {
            //         this.what = '*'+val;
            //     }
            // });

        };

        return DropdownObject

    }
);

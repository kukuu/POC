
'use strict';

// Service for concept proposal
angular.module('poc').service('StringObject',
    function StringObject() {
        //single instance of concept object
        this.instance;

        //concept object
        function StringObject(concept) {
            angular.exdent(this, concept);
        };
        
        function get(concept) {
            
        }

        function set() {

        }

        return {
            get: get,
            set: set
        }

    }
);

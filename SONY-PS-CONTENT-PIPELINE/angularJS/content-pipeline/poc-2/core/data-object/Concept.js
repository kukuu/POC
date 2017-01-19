
// Service for concept proposal
angular.module('poc').service('Concept',
    function Concept() {

        //concept object
        function Concept(concept) {
            
            this._objectType = 'ConceptObject';

            this.id = 100;
            this.name = '';
            this.contentType = '';

            this.test = function() {

            }

            angular.extend(this, concept);
        };


        return Concept;

    }
);

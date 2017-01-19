
// Service for concept proposal
angular.module('poc').service('conceptFactory',
    function ConceptFactory(Concept, serviceAPI) {

        var concept, promise;

        //concept object
        //load concept
        function fetchConcept(conceptId) {
            promise = serviceAPI.concept(conceptId);
            promise.then(function(responce) {
                if(responce.status == 200) {
                    concept = Concept(responce.data);
                    console.log(concept);
                }
            });

            return promise;
        }
        
        function save() {
            promise = serviceAPI.save(concept);
            promise.then(function(responce) {
                if(responce.status == 200) {
                    console.log('SAVE', responce);
                }
            });
            return promise;
        }

        function update(key, value) {
            console.log(key, value);
            
            if(key && value) {
                concept[key] = value;
            }
        }

        //TO DO - DON"T USE
        function getConcept() {
            return concept;
        }

        return {
            fetchConcept: fetchConcept,
            save        : save,
            getConcept  : getConcept,
            update      : update
        }

    }
);
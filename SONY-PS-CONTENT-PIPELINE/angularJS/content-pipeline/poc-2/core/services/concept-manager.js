
// Service for concept proposal
angular.module('poc').service('conceptManager',
    function conceptManager(conceptFactory, fieldFactory, $q) {
        //single instance of concept object
        this.concept;

        //concept object
        function init() {
            var promises = [];

            promises.push( fieldFactory.init() );
            promises.push( conceptFactory.fetchConcept(2068) );
            
            return $q.all(promises);
        }
        
        function sync() {
            var fields = fieldFactory.getAllFields();

            angular.forEach(fields, function(field) {
                conceptFactory.update(field.fieldCode, field.value);
            });
        }

        function save() {
            sync();
            conceptFactory.save();
        }

        return {
            init:init,
            save:save
        }

    }
);

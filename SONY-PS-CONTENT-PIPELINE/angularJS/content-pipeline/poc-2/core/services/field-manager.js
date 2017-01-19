
// Service for concept proposal
angular.module('poc').service('fieldManager',
    function ConceptFactory(conceptFactory, fieldFactory) {
        
        var concept;

        function getFields(fieldsName) {
            concept = conceptFactory.getConcept();

            var fields = [];
            
            angular.forEach(fieldsName, function(name) {
                
                console.log(name);

                var field = fieldFactory.getField(name);
                fields.push(field);
            });

            return fields;
        }
        
        return {
            getFields: getFields,
        }

    }
);
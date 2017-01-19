/*
*   Field Factory
*   -This Field Factory is responsible all funational behaviour for 'field object' entire application.
*/
angular.module('poc').service('fieldFactory',
    function ConceptFactory(Field, serviceAPI, conceptFactory) {
        
        var promise, fields = {};

        //if the field object does not exit then create one
        function findAndCreate(fieldProperty) {
            //if 'fieldProperty' is fieldCode then convert into object.
            if(typeof fieldProperty == 'string') {
                fieldProperty = {fieldCode:fieldProperty};
            };

            var field = fields[ fieldProperty.fieldCode ];
            if(field) {
                field.updateProperty(fieldProperty);
            } else {
                field = fields[ fieldProperty.fieldCode ] = new Field( fieldProperty );
            }

             if(field.triggerUpdate) {
                // console.log('TRIGGER UPATE..', field.fieldCode)
                field.update = validate;
            }

            return field;
        }

        //init api
        function init() {
            promise = serviceAPI.init();
            promise.then( processFieldResponce );

            return promise;
        }

        // validate api
        function validate() {
            console.log('VALIDATE FIELDS....')
            promise = serviceAPI.validate( conceptFactory.getConcept() );
            promise.then( processFieldResponce );

            //TO DO
            angular.forEach(fields, function(field) {
                // console.log('===', field.value() );
            });

            return promise;
        }

        function processFieldResponce(responce) {
            console.log('FIELDS Responce....')
            if(responce.status == 200) {
                var formFields = responce.data.formFields;
                angular.forEach(formFields, function(field) {
                    fields[field.fieldCode] = findAndCreate(field);
                });
            }
        }

        //TO DO - DO NOT USE 
        function getAllFields() {
            return fields;
        }
        
        return {
            getField: findAndCreate,
            init: init,
            validate: validate,
            getAllFields: getAllFields
        }

    }
);
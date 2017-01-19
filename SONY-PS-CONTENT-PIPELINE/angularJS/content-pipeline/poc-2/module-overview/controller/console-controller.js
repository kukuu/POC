
angular.module('poc').controller('ConsoleController',
    function View1Controller($scope, fieldFactory, conceptFactory ) {
        $scope.allFields = fieldFactory.getAllFields();
        $scope.conceptObject = conceptFactory.getConcept
    }
);

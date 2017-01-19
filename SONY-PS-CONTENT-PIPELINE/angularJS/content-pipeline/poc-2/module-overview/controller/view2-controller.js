
angular.module('poc').controller('View2Controller',
    function View2Controller($scope, fieldManager) {

        $scope.fields = fieldManager.getFields(['contentType']);

    }
);

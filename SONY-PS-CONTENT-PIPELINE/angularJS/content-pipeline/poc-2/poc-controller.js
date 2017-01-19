
angular.module('poc').controller('POCController',
    function POCController( $scope, conceptManager ) {

        $scope.saveSubmit = function() {
            conceptManager.save();
        }

    }
);

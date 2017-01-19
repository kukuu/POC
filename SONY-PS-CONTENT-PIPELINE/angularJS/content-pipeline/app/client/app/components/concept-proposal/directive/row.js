angular.module('conceptProposal').directive('conceptProposalRow', function (conceptProposalServiceConcept) {
    return {
        restrict: 'AE',
        transclude: true,
        scope: {
            required: '@',
            label: '@'
        },
        controllerAs: 'conceptProposalControllerRow',
        templateUrl: 'app/components/concept-proposal/partial/directive/row.html',
        controller: function ($scope) {
            this.required = function () {return $scope.required === 'true';}
            this.label = function () {return $scope.label;}
        }
    };
});

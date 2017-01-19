angular.module('conceptProposal').controller('conceptProposalControllerTestValidation',
function conceptProposalControllerTestValidation($scope, conceptProposalServiceConcept) {
    $scope.regions = [
        {
            label: 'SIEA',
            value: false
        },
        {
            label: 'SIEU',
            value: true
        },
        {
            label: 'SIEJA',
            value: false
        }
    ];
    $scope.update = function () {
        conceptProposalServiceConcept.field('region')
        .value($scope.regions.filter(function filter(region) {
            return region.value;
        }).map(function map(region) {
            return {
                _type: "Region",
                code: region.label,
                name: region.label
            };
        }));
    }

    // Attaching service to controller to access concept fields.
    $scope.concept = conceptProposalServiceConcept;
});

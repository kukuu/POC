angular.module('conceptProposal').directive('conceptProposalRowField', function (conceptProposalServiceConcept) {
    return {
        require: 'ngModel',//This is required by the validation ng-model in the text field
        restrict: 'A',
        transclude: true,
        scope: {
            conceptProposalRowField: '@'
        },
        bindToController: true,
        controllerAs: 'conceptProposalControllerRowField',
        templateUrl: 'app/components/concept-proposal/partial/directive/row-field.html',
        controller: function () {
            this.field = conceptProposalServiceConcept.field(this.conceptProposalRowField);
        }
    };
});

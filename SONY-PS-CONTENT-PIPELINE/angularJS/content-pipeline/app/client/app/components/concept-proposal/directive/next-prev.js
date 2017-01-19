
//Directive for previous and next
angular.module('conceptProposal').directive('prevNext', function (conceptProposalServiceConcept) {
    return {
        restrict: 'E',
        template: '<button class="btn">{{back}}</button> <button class="btn">{{forward}}</button>',
        scope: {
            back: '@back',
            forward: '@forward'
        },
        link: function(scope, element, attrs) {
            $(element[0]).on('click', function() {
                history.back();
                scope.$apply();
            });
            $(element[1]).on('click', function() {
                history.forward();
                scope.$apply();
            });
        }
    };
});
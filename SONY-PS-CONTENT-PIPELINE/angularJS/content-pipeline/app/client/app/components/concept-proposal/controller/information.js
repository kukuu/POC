angular.module('conceptProposal').controller('conceptProposalControllerInformation',
function conceptProposalControllerInformation(sharedOptionsFactory,
    conceptProposalServiceConcept,
    $scope
) {
        
    //cancelling and re-setting the form
    //resetting should empty all the fields on the "cancel" button
    $scope.reset = function() {
        $scope.requiredField = '';
    };
    //end cancelling and re-setting the form


    this.regions = [
        'SIEA',
        'SIEE',
        'SIEJA'
    ].map(function mapRegion(region) {
        return {
            name: region,
            label: region,
            value: conceptProposalServiceConcept
                .field('concept.regions').value().indexOf(region) > -1
        };
    });
    this.update = angular.bind(this, function () {
        conceptProposalServiceConcept.field('concept.regions')
        .value(this.regions.filter(function filter(region) {
            return region.value;
        }).map(function map(region) {
            return {
                _type: 'Region',
                code: region.label,
                name: region.label
            };
        }));
    });
}).filter('startFrom', function () { //Built in Angular
    if(typeof input === undefined){
        return null;
    }else{
        return function (input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    }
});
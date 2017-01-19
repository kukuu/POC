angular.module('conceptProposal').controller('conceptProposalControllerCompliance', function () {
    var options = [
        'No',
        'Yes',
        'Unconfirmed'
    ].map(function map(option) {
        return {
            label: option,
            value: option
        };
    });

    this.occ = {options: angular.copy(options)};
    this.virtualCurrency = {options: angular.copy(options)};
});


//Controller for Proposal Platform
angular.module('conceptProposal').controller('conceptProposalControllerPlatform',
function conceptProposalControllerPlatform(conceptProposalServiceConcept) {
    this.platforms = [
        {
            label: 'PS4',
            value: false
        },
        {
            label: 'PS3',
            value: true
        },
        {
            label: 'VITA',
            value: false
        }
    ];
    this.update = angular.bind(this, function update() {
        conceptProposalServiceConcept.field('platform')
        .value(this.platforms.filter(function filter(platform) {
            return platform.value;
        }).map(function map(platform) {
            return {
                _type: "Platform",
                code: platform.label,
                name: platform.label
            };
        }));
    });
});


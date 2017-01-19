// This file will handle all the routes and the route configuration for the Concept Proposal Module.
angular.module('application').config(function config($stateProvider) {


    $stateProvider
        .state('index', {
            url: '',
            abstract: true,
            template: '<ui-view/>'
        })

        // A state to prevent 404 in root url.
        .state('index.home', {
            url: '/',
            template: '<ui-view/>'
        })

        // Concept Proposal: Core concept information
        .state('index.conceptProposal', {
            url: '/conceptproposal',
            controller: 'conceptProposalControllerIndex',
            controllerAs: 'conceptProposalControllerIndex',
            templateUrl: 'app/components/concept-proposal/partial/index.html',
            abstract: true
        })

        // Concept Proposal: Concept Information
        .state('index.conceptProposal.information', {
            url: '/information',
            views: {
                '': {
                    templateUrl: 'app/components/concept-proposal/partial/information.html',
                    controller: 'conceptProposalControllerInformation',
                    controllerAs: 'conceptProposalControllerInformation'
                },
                'partner@index.conceptProposal.information': {
                    templateUrl: 'app/components/concept-proposal/partial/view/information-partner.html',
                    controller: 'conceptProposalControllerInformationPartner',
                    controllerAs: 'conceptProposalControllerInformationPartner'
                }
            }
        })

        // Concept Proposal: Proposed Platform
        .state('index.conceptProposal.platform', {
            url: '/platform',
            templateUrl: 'app/components/concept-proposal/partial/platform.html',
            controller: 'conceptProposalControllerPlatform',
            controllerAs: 'conceptProposalControllerPlatform'

        })


        // Concept Proposal: Compliance
        .state('index.conceptProposal.compliance', {
            url: '/compliance',
            templateUrl: 'app/components/concept-proposal/partial/compliance.html',
            controller: 'conceptProposalControllerCompliance',
            controllerAs: 'conceptProposalControllerCompliance'
        })

        // Concept Proposal: Test Validation
        .state('index.conceptProposal.testvalidation', {
            url: '/testvalidation',
            templateUrl: 'app/components/concept-proposal/partial/testvalidation.html',
            controller: 'conceptProposalControllerTestValidation'
        })

        // Login
        .state('index.login', {
            url: '/login',
            controller: 'authenticationControllerLogin',
            controllerAs: 'authenticationControllerLogin',
            templateUrl: 'app/components/authentication/partial/login.html'
        })

        // 404
        .state('index.404', {
            url: '/*junk',
            template: '404\'d'
        });
});

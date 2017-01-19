// Application-wide module
angular.module('application', [
    // 3rd party modules
    'ui.router',
    'ngAnimate',
    'ngTouch',
    'ui.bootstrap',

    // Custom modules
    'authentication',
    'conceptProposal'
]);

// Concept Proposal module
angular.module('conceptProposal', [
    'ui.bootstrap.modal',

    'sharedDropdown',
    'sharedRadio',
    'sharedTextfield',
    'sharedClientValidation',


    'sharedData', // Temporary measure to test concepts until API is running.

    'api',
    'oauth2'
]);

// OAuth2
angular.module('oauth2', [
    'ngCookies',
    'angular-oauth2'
]);

// Authentication
angular.module('authentication', [
    'oauth2',
    'ui.router'
]);

// API
angular.module('api', []);

// Shared modules
angular.module('sharedInstantiator', []);
angular.module('sharedOptions', [
    'sharedInstantiator'
]);
angular.module('sharedSingleSelect', [
    'sharedOptions'
]);
angular.module('sharedRadio', [
    'sharedOptions'
]);
angular.module('sharedDropdown', [
    'sharedSingleSelect'
]);
angular.module('sharedMultiSelect', [
    'sharedOptions'
]);

angular.module('sharedData', []);

// Shared Text Fields module
angular.module('sharedTextfield', []);


// Shared Client Validation
angular.module('sharedClientValidation', []);

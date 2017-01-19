// Directive for shared dropdown
// Dependencies:Module,sharedOptionsFactory(factory.js),isolated scope,template and controller)
angular.module('sharedDropdown')
.controller('sharedDropdownController', function controller(
    sharedOptionsFactory,
    sharedDropdownFactoryFirst
) {
    if (
        !this.dropdown ||
        this.dropdown.constructor !== sharedOptionsFactory().constructor
    ) {
        throw new Error([
            'sharedDropdown directive:',
            'Attribute value must be passed a sharedOptionsFactory instance.'
        ].join(' '));
    }

    if (
        this.firstItem !== undefined &&
        this.firstItem.constructor !== sharedDropdownFactoryFirst().constructor
    ) {
        throw new Error([
            'sharedDropdown directive:',
            'first-item attribute must be passed a sharedDropdownFactoryFirst instance.'
        ].join(' '));
    }
}).directive('sharedDropdown', function sharedDropdown() {
    return {
        restrict: 'A',
        scope: {
            dropdown: '=sharedDropdown',
            firstItem: '='
        },
        templateUrl: 'app/shared/dropdown/partial/index.html',
        bindToController: true,
        controllerAs: 'sharedDropdownController',
        controller: 'sharedDropdownController'
    };
});

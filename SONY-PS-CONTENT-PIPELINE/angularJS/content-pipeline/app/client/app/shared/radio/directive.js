angular.module('sharedRadio').directive('sharedRadio', function sharedRadio(sharedOptionsFactory) {
    return {
        restrict: 'A',
        scope: {
            options: '=sharedRadio'
        },
        templateUrl: 'app/shared/radio/index.html',
        bindToController: true,
        controllerAs: 'sharedRadioController',
        controller: function controller() {
            if (
                !this.options ||
                this.options.constructor !== sharedOptionsFactory().constructor
            ) {
                throw new Error([
                    'sharedRadio directive:',
                    'Attribute must be passed a sharedOptionsFactory instance.'
                ].join(' '));
            }
        }
    };
});

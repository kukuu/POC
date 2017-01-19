describe('conceptProposalControllerIndex', function () {
    var $controller;
    beforeEach(function () {
        module('conceptProposal');
        inject(function ($injector) {
            $controller = $injector.get('$controller');
            $controller('conceptProposalControllerIndex', {
                sharedDropdownFactoryCore: $injector.get('sharedDropdownFactoryCore')
            });
        });
    });

    it('exists', function () {
        expect(true).toBe(true);
    });
});

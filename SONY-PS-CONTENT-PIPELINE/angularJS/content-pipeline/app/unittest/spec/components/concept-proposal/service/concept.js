describe('conceptProposalServiceConcept', function () {
    var service;
    var conceptProposalServiceField;

    function exists(name) {
        it('is a function.', function isFunction() {
            expect(typeof service[name]).toBe('function');
        });
    }

    beforeEach(function () {
        module('conceptProposal');
        inject(function ($injector) {
            service = $injector.get('conceptProposalServiceConcept');
            conceptProposalServiceField = $injector.get('conceptProposalServiceField');
        });
    });

    // raw object is at properties.partnerRoles.roles
    describe('#validate', function () {
        exists('validate');
    });

    describe('#role', function () {
        exists('role');
        describe('returns', function () {
            it('a string.', function () {
                expect(service.role()).toBe('');
            });
            xit('the user-interface option given from the API object.', function () {
                $httpBackend.expectGet('api/concept/endpoint').respond({
                    partnerRoles: []
                });
            });
        });
        // We write a function to test for various instances of the typeof value.
        it('can be passed a string.', function () {
            function thrown(value) {
                return new Error([
                    'conceptProposalServiceConcept.role: Setting invalid role.',
                    'Expecting a string, got ' + (typeof value)
                ].join(''));
            }
            expect(service.role('a string')).toBe('a string');
            expect(function () {service.role({});}).toThrow(thrown({}));
            expect(function () {service.role([]);}).toThrow(thrown([]));
            expect(function () {service.role(1);}).toThrow(thrown(1));
            expect(function () {service.role(false);}).toThrow(thrown(false));
        });
    });

    describe('#field', function () {
        exists('field');
        it('returns a Field object when passed a legitimate field name.', function () {
            expect(service.field('region').constructor).toBe(conceptProposalServiceField.Field);
            expect(service.field('region').name()).toBe('region');
        });
        it('creates a new field when one does not exist. This is temporary.', function () {
            spyOn(conceptProposalServiceField, 'create');
            service.field('non-existent-field-name');
            expect(conceptProposalServiceField.create).toHaveBeenCalled();
        });
        xit('throws an error when passed a non-existent field name.', function () {
            expect(function () { service.field('a string'); }).toThrow(new Error([
                'conceptProposalServiceConcept.field: Invalid field name "',
                'a string',
                '".'
            ].join('')));
        });
    });
});

describe('conceptProposalServiceAPI', function conceptProposalServiceAPI() {
    var service;
    var $httpBackend;
    var $q;
    var conceptProposalFactoryAPICache;

    function exists(name) {
        it('is a function.', function isFunction() {
            expect(typeof service[name]).toBe('function');
        });
    }

    beforeEach(function beforeEach() {
        module('conceptProposal');
        inject(function inject($injector) {
            service = $injector.get('conceptProposalServiceAPI');
            $httpBackend = $injector.get('$httpBackend');
            $q = $injector.get('$q');
            conceptProposalFactoryAPICache = $injector.get('conceptProposalFactoryAPICache');
        });
    });

    describe('#messageBundleGroups', function fnc() {
        exists('messageBundleGroups');
        it('returns a promise.', function returns() {
            expect(service.messageBundleGroups().constructor).toBe($q.defer().promise.constructor);
        });
        describe('response', function bundleResponse() {
            var code = 'test';
            beforeEach(function beforeEach() {
                $httpBackend.expectGET('/messagebundlegroups/' + code).respond({
                    locale: 'en_GB',
                    code: 'concept',
                    messages: [
                        {
                            key: 'key1',
                            value: 'value1'
                        },
                        {
                            key: 'key2',
                            value: 'value2'
                        }
                    ]
                });
            });

            it('format.', function responseFormat(done) {
                service.messageBundleGroups(code).then(function then(response) {
                    expect(response.key1).toBe('value1');
                    expect(response.key2).toBe('value2');
                    done();
                });
                $httpBackend.flush();
            });
            it('caches the object.', function cache() {
                spyOn(conceptProposalFactoryAPICache, 'get').and.callThrough();
                service.messageBundleGroups(code);
                $httpBackend.flush();
                expect(conceptProposalFactoryAPICache.get)
                    .toHaveBeenCalledWith('/messagebundlegroups/' + code);
            });
        });
    });
    describe('#get', function () {
        exists('get');
        
    });
});

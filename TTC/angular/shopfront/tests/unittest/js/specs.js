// Author: Alexander Adu-Sarkodie
//Date: January 2017

//SPECS-------------------------

describe('myApp', function () {
    var scope,
    controller;
    beforeEach(function () {
        module('myApp');
    });

    describe('ItemController', function () {
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('ItemController', {
                '$scope': scope
            });
        }));
        it('sets the grocery  item  name', function () {
            expect(scope.name).toBe('Butter');
        });

        it('watches the grocery name and updates the number of items', function () {
            expect(scope.counter).toBe(0);
            scope.name = 'Bread';
            scope.$digest();
            expect(scope.counter).toBe(1);
        });
    });

    describe('ItemCtrlHttp', function () {

        var $httpBackend,
            expectedUrl = '/POC/TTC/shopfront?key1=Butter',
            promise,
            successCallback,
            errorCallback,
            httpController;

        beforeEach(inject(function ($rootScope, $controller, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            scope = $rootScope.$new();
            successCallback = jasmine.createSpy();
            errorCallback = jasmine.createSpy();
            httpController = $controller('ItemCtrlHttp', {
                '$scope': scope
            });
        }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('returns http requests successfully and resolves the promise', function () {
            var data = '{"translationKey":"translationValue"}';
            expect(httpController).toBeDefined();
            $httpBackend.expectGET(expectedUrl).respond(200, data);
            promise = scope.getHttp();
            promise.then(successCallback, errorCallback);

            $httpBackend.flush();

            expect(successCallback).toHaveBeenCalledWith(angular.fromJson(data));
            expect(errorCallback).not.toHaveBeenCalled();
        });

        it('returns http requests with an error and rejects the promise', function () {
            $httpBackend.expectGET(expectedUrl).respond(500, 'Oh no!!');
            promise = scope.getHttp();
            promise.then(successCallback, errorCallback);

            $httpBackend.flush();

            expect(successCallback).not.toHaveBeenCalled();
            expect(errorCallback).toHaveBeenCalled();
        });
    });
    
});
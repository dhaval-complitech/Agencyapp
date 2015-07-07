'use strict';

describe('Controller: AddnewagencyCtrl', function() {

    // load the controller's module
    beforeEach(module('agencyApp'));

    var AddnewagencyCtrl,
        scope;
    var GLOBALS = {
        api: 'http://192.168.1.30:4000//api/',
    };

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
        $httpBackend.expectPOST(+'create_agency').respond(function() {
            return [202, {}, {}]
        });
        scope = $rootScope.$new();
        AddnewagencyCtrl = $controller('AddnewagencyCtrl', {
            $scope: scope
        });
    }));


    //test case for checking the function for status change
    it('Change Status function should change the loading status', function() {
        scope._setStatus('success');
        expect(scope.add_status).toBe('success');
    });


    //test case for checking the function for submit the new agency
    it('Submit the form for the agency and expect the success', function() {
        scope.agency = {
            name: 'Name',
            description: 'This is the description',
            tags: [{
                text: '123'
            }, {
                text: '2222'
            }],
            grade: '1'
        };
        scope.submit();
        expect(scope.add_status).toBe('loading');
    });
});

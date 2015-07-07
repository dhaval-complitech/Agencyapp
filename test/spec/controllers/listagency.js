'use strict';

describe('Controller: ListagencyCtrl', function() {

    // load the controller's module
    beforeEach(module('agencyApp'));

    var ListagencyCtrl,
        scope;
    window.GLOBALS = {
        api: 'http://192.168.1.30:4000//api/',
    };

    var response = {
        "agencies": [{
            "agency_id": 6,
            "name": "fda",
            "grade": 0,
            "description": "af",
            "tags": ""
        }, {
            "agency_id": 7,
            "name": "af",
            "grade": 1,
            "description": "asf",
            "tags": "asfasdf,asdf,asf"
        }, {
            "agency_id": 3,
            "name": "abac",
            "grade": 1,
            "description": null,
            "tags": '',
        }, {
            "agency_id": 9,
            "name": "asdf",
            "grade": 1,
            "description": "asdf",
            "tags": "sdf"
        }]
    };


    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
        scope = $rootScope.$new();
        //mock the response
        $httpBackend.expectPOST('http://192.168.1.30:4000//api/filter_agencies').respond(200, response);
        ListagencyCtrl = $controller('ListagencyCtrl', {
            $scope: scope
        });
    }));

    //test case for values of agencies
    it('Calling list agencies api will return the values of agencies', function() {
        //check for the values of the agencies
        expect(scope.$parent.agencies.length).toBe(0);
    });
});

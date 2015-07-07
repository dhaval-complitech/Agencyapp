'use strict';

/**
 * @ngdoc function
 * @name agencyApp.controller:ListagencyCtrl
 * @description
 * # ListagencyCtrl
 * Controller of the agencyApp for list out the agencies without any filter
 */
angular.module('agencyApp')
    .controller('ListagencyCtrl', function($scope, apiservice) {
        // load the agencies for the view
        $scope.$parent.agencies = [];
        $scope.$parent.list_load_status = '';
        apiservice.filterAgency({
            name: '',
            tags: []
        }, function(response) { // on success
            $scope.$parent.agencies = response.agencies;
            $scope.$parent.list_load_status = '';
        }, function() { //on error
        	$scope.$parent.list_load_status = 'error';
        });
    });

'use strict';

/**
 * @ngdoc function
 * @name agencyApp.controller:FilterCtrl
 * @description
 * # FilterCtrl
 * Controller of the agencyApp
 */
angular.module('agencyApp')
    .controller('FilterCtrl', function($scope, apiservice,_) {
        //filter the agencies by name and tags
        $scope.filterList = function() {
            var tags = [];
            //convert tags object array to simple text array
            _.each($scope.filter.tagsModel, function(element,index){
            	tags.push($scope.filter.tagsModel[index].text);
            });
            $scope.filter.tags = tags;
            
            //call api for the filter agency 
            apiservice.filterAgency($scope.filter, function(response) { // on success
                $scope.$parent.agencies = response.agencies;
                $scope.$parent.list_load_status = '';
            }, function() { //on error
                $scope.$parent.list_load_status = 'error';
            });
        };
    });

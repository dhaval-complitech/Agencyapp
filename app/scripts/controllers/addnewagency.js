'use strict';

/**
 * @ngdoc function
 * @name agencyApp.controller:AddnewagencyCtrl
 * @description
 * # AddnewagencyCtrl
 * Controller of the agencyApp for adding new agency 
 */
angular.module('agencyApp')
    .controller('AddnewagencyCtrl', function($scope,$timeout, apiservice, _) {
        $scope.add_status = '';
        $scope.agency = {
            grade : '1'   
        };

        /**
         * @method $scope.submit 
         * function to submit the form and add the agency
         */
        $scope.submit = function() {
        	$scope.add_status = 'loading';
            var tagsModel = angular.copy($scope.agency.tagsModel);
            var tags = '';
            _.each(tagsModel, function(element, index) {
                if (index === 0) {
                    tags = tagsModel[index].text;
                } else {
                    tags = tags + ',' + tagsModel[index].text;
                }
            });
            $scope.agency.tags = tags;

            //call the add new agency api 
            apiservice.addAgency($scope.agency, function(response) {//success callback
                $scope._setStatus('success');
                var tags = '';
                _.each(response.tags,function(element,index){
                    if(index===0){
                        tags = response.tags[index].name
                    } else {
                        tags = tags + ',' +response.tags[index].name
                    }
                });
                var agency = {
                    grade : response.grade,
                    name:response.name,
                    description:response.description,
                    tags:tags,
                    id:response.id
                };
                $scope.$parent.agencies.push(agency);
                //reset the agency
                $scope.agency = {
                    grade : '1'   
                };
                $scope.formAdd.$setPristine();
            }, function() { //error callback
                $scope._setStatus('error');
            });
        };

        /**
         * @method $scope.submit 
         * @private function to set the status of the page and remove the status after 3 seconds
         */
        $scope._setStatus = function(status){
            $scope.add_status = status;
            $timeout(function(){
                $scope.add_status = '';
            },3000);
        };
    });

'use strict';

angular.module('agencyApp')
.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
		.state('home', {
			url: '/',
			controller:function($scope){
				$scope.agencies = [];
			},
			//specify views and controllers
			views: {
				//list agency view
				'listAgency@': { 
					templateUrl: 'views/listAgency.html',
					controller:'ListagencyCtrl',
				},
				//filter view
				'filter@': { 
					templateUrl : 'views/filter.html',
					controller:'FilterCtrl',
				},
				//add new agency view
				'addNewAgency@': { 
					templateUrl : 'views/addNewAgency.html',
					controller:'AddnewagencyCtrl',	
				}
			}
		})
	  });
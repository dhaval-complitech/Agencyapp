'use strict';

/**
 * @ngdoc service
 * @name agencyApp.apiservice
 * @description
 * # apiservice
 * Service in the agencyApp.
 */
angular.module('agencyApp')
  .service('apiservice', function ($resource) {
  	return $resource(GLOBALS.api + ':methodName/:id', {
        method: '@method'
    }, {
        //add agency api
        addAgency: {
            method: 'POST',
            params: {
                methodName: 'create_agency'
            }
        },
        //filter and list out the agencies
        filterAgency: {
            method: 'POST',
            params: {
                methodName: 'filter_agencies'
            }
        },
    });
  });

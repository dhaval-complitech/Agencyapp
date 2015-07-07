angular.module('agencyApp').controller 'AddnewagencyCtrl', ($scope, $timeout, apiservice, _) ->
  $scope.add_status = ''
  $scope.agency = grade: 'padawan'

  $scope.submit = ->
    $scope.status = ''
    tagsModel = angular.copy($scope.agency.tagsModel)
    tags = ''
    _.each tagsModel, (element, index) ->
      if index == 0
        tags = tagsModel[index].text
      else
        tags = tags + ',' + tagsModel[index].text
      return
    $scope.agency.tags = tags
    #call the add new agency api 
    apiservice.addAgency $scope.agency, (->
      #success callback
      $scope._setStatus 'success'
      return
    ), ->
      #error callback
      $scope._setStatus 'error'
      return
    return

  $scope._setStatus = (status) ->
    $scope.add_status = status
    $timeout (->
      $scope.add_status = ''
      return
    ), 3000
    return

  return

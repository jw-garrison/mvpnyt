angular.module('mvp.search', [])

.controller('SearchController', function ($scope, Search) {
  $scope.data = {};
  $scope.data.page = 0;
  $scope.isDisabled = false;

  $scope.newer = function () {
    $scope.data.page++;
    $scope.search();
  };

  $scope.older = function () {
    if ($scope.data.page <= 0) {
      $scope.data.page = 0;
    } else {
      $scope.data.page--;
    }

    console.log($scope.data.page);
    $scope.search();
  };

  $scope.disableSubmit = function() {
    $scope.isDisabled = true;
  };

  $scope.search = function () {
    $scope.isDisabled = true;
    Search.searchArchive($scope.query, $scope.data.page)
      .then(function(articles) {
        $scope.data.articles = articles;
      })
      .then(function(){
        $scope.isDisabled = false;
      })
  };
});

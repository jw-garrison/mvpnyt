angular.module('mvp.search', [])

.controller('SearchController', function ($scope, Search) {
  $scope.data = {};
  $scope.data.page = 0;

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

  $scope.search = function () {
    Search.searchArchive($scope.query, $scope.data.page)
      .then(function(articles) {
        $scope.data.articles = articles;
      })
  };
});

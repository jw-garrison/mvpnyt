angular.module('mvp.search', [])

.controller('SearchController', function ($scope, Search) {
  $scope.data = {};
  $scope.data.page = 0;

  $scope.newer = function () {
    $scope.data.page++;
    $scope.search();
  };

  $scope.older = function () {
    $scope.data.page--;
    $scope.search();
  };

  $scope.search = function () {
    console.log($scope.query);
    Search.searchArchive($scope.query, $scope.data.page)
      .then(function(articles) {
        $scope.data.articles = articles;
      });
  };
});

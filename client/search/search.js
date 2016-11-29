angular.module('mvp.search', [])

.controller('SearchController', function ($scope, Search) {
  $scope.data = {};
  $scope.search = function () {
    Search.searchArchive($scope.query)
      .then(function(articles) {
        $scope.data.articles = articles;
      });
  };
});

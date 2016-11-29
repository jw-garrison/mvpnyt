angular.module('mvp', [
  'mvp.search',
  'mvp.services',
  'ngRoute',
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'search/search.html',
      controller: 'SearchController',
    });
});

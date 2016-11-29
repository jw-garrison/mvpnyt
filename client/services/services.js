angular.module('mvp.services', [])

.factory('Search', function ($http) {
  var searchArchive = function (q) {
    return $http({
      method: 'POST',
      url: '/api/search',
      data: { q: q }
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    searchArchive: searchArchive
  };
});

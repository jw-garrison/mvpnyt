angular.module('mvp.services', [])

.factory('Search', function ($http) {
  var searchArchive = function (q, page) {
    return $http({
      method: 'POST',
      url: '/api/search',
      data: {
        q: q,
        page: page
      }
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    searchArchive: searchArchive
  };
});

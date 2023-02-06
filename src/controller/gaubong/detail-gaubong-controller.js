window.DetailController = function ($scope, $routeParams, $rootScope) {
  $scope.gauBong = $rootScope.listGauBong.filter((el) => {
    return el.id == $routeParams.id;
  })[0];
};

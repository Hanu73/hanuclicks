myappController.controller('dashboardnew',function($scope,$http,$location,$cookies,$window) {
    $scope.userData=JSON.parse($window.localStorage.getItem('myAccount'));
});

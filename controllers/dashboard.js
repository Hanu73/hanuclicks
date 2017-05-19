myAppcontroller.controller('dashboard',function($scope,$http,$window,$location) {
    $scope.userDetails=angular.fromJson( $window.localStorage.getItem('user'));
    console.log($scope.userDetails)
    $scope.selectedCategory=function(category){
        $location.path('/'+category)
    }

})

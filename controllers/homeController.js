app.controller('homeController',function($scope,$location){
    $scope.contact = function(){
        $location.path('/contact')
    }

    $scope.albums= function() {
        $location.path('/albums')
    }

/*    $(document).on('click', '#content', function(e) {
        $(".navbar-main-collapse").removeClass("in");
        $('navbar-nav').css({
            transition: "0.5s"
        })//.addClass("collapse");
    });*/


});
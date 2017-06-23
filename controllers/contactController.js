app.controller('contactController',function($scope,$http){

    $scope.stuff=[
        {
            matter:'hai'
        },
        {
            matter:'hello'
        },
        {
            matter:'wassup'
        }
    ];

   /* $scope.getLocation =function() {
        $http({
            method: "GET",
            url: "https://ipinfo.io"
        }).then(function mySuccess(data) {
             data = JSON.stringify(data);
             var x = data;
             console.log(x)

        }, function myError(data) {
            alert("Error")
        });
    }*/
    $(document).on('click', '#content', function(e) {
        $('.navbar-collapse').collapse('hide');
       /* $(".navbar-main-collapse").removeClass("in",'300');*/
        //.addClass("collapse");
    });
});
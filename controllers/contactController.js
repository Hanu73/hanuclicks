app.controller('contactController',function($scope){

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
    $(document).on('click', '#content', function(e) {
        $('.navbar-collapse').collapse('hide');
       /* $(".navbar-main-collapse").removeClass("in",'300');*/
        //.addClass("collapse");
    });
});
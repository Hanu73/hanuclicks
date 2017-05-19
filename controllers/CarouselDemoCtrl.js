app.controller('CarouselDemoCtrl',function($scope,$location) {
    /* $scope.myInterval = 3000;*/
    $scope.slides = [
        {
            image: 'images/IMG_0610.JPG',
            "title": "Lake view in a Park",
            "content": "Such a scenic beauty it is and ambiance was so peaceful"
        },
        {
            image: 'images/IMG_0684.JPG',
            "title": "National Zoo in Bangalore",
            "content": "When my lens caught a huge Elephant having its stuff ;)"
        }, {
            image: 'images/IMG_0583.JPG',
            "title": "Those rays !!! ",
            "content": "When you are trying to get in shade, but Sun doesn't leave you :P"
        },
        {
            image: 'images/IMG_0271.JPG',
            "title": "Bangalore Museum",
            "content": "Beautiful paintings of Almighty ! "
        },
        {
            image: 'images/IMG_0723.JPG',
            "title": "His Eyes made my day !!",
            "content": "Safari Time...National Zoo "
        }, {
            image: 'images/IMG_0752.JPG',
            "title": "Butterfly Park",
            "content": "Whoaaa !! A place where you can see Umpteen species of Butterflies. Such a cool place it is !! "
        }];
  /*  $(document).on('click', '#content', function(e) {
        $(".navbar-main-collapse").removeClass("in");
        $('navbar-nav').css({
            transition: "0.5s"
        })//.addClass("collapse");
    });*/
});
var app = angular.module("app1",['ngRoute','ui.bootstrap']);
app.config(function($routeProvider){
    $routeProvider.when('/home',
        {
            templateUrl:'views/home.html'
        });

    $routeProvider.when('/contact',
        {
            templateUrl:'views/contact.html'
        });

    $routeProvider.when('/albums',
        {
            templateUrl:'views/albumOne.html'
        });
    $routeProvider.otherwise({redirectTo:'/home'});

    if($('.navbar-toggle'))
    {
        $('.navbar-collapse ul li').click(function () {
            $('.navbar-collapse').collapse('hide');
        });
    }
});
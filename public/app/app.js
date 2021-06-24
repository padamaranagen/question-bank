
(function () {
    var app = angular.module('wowApp', ['ngRoute','QuestionBank']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', '$locationProvider','$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true);
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $routeProvider
    //------------------ Home
    .when("/", {
        templateUrl: "app/question-bank/question-bank.html"
    })
    .when("/index", {
        templateUrl: "app/question-bank/question-bank.html"
    })  







    //------------------else 404
    .otherwise("/404", {templateUrl: "views/404.html"});

    
}]);


})();//end function
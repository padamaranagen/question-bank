(function () {
var app = angular.module('QuestionBank', []);

app.controller('QuestionBankCtrl', ['$scope', '$http', function ($scope, $http) {
    $http({    
        url:'https://api.jsonbin.io/b/5cc3acfde04b2c0bd81d5307',
        method: 'GET',
    })
    .then(function mySuccess(response) {
        $scope.data= response.data.questionbank;
    },function myError(){
        $scope.data=response.data;
    }
    );
}]);
})();//end function
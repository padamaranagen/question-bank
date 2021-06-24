(function () {
var app = angular.module('QuestionBank', []);

app.controller('QuestionBankCtrl', ['$scope', '$http', function ($scope, $http) {
    $http({    
        url:'https://nagen-node-api.herokuapp.com/api/qb',
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
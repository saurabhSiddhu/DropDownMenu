var app = angular.module('app', ['ui.bootstrap']);
app.controller('myController', ['$scope', function($scope) {
    /*$scope.pageSize = 4;
    $scope.currentPage = 0;*/

}]);
app.directive('dropDown', function() {
    return {
        restrict: 'E',
        templateUrl: 'template.html',
        transclude: true,
        controller: function($scope, $http) {
            $http({
                method: 'GET',
                url: 'json/data.json'
            }).then(function(response) {
                $scope.jsondata = response.data.value;
            });
            $scope.pageSize = 4;
            $scope.currentPage = 0;
            $scope.Name = [];
            $scope.selectedID = "";
            $scope.value = 0;
            $scope.change = function() {
                if ($scope.value === 0) $scope.value = 1;
            };
            $scope.arrayID = [];
            /*the below function shows data onto the input div element*/
            $scope.showData = function(val) {
                var index = $scope.arrayID.indexOf(val._id);
                var name = val.firstName + ' ' + val.lastName;

                if (index != -1) {
                    $scope.arrayID.splice(index, 1);
                    $scope.Name.splice(index, 1);

                } else {
                    $scope.arrayID.push(val._id);
                    $scope.Name.push(name);

                }

            };
            /*The below function deletes the name from the input div element*/
            $scope.deleteFromInbox = function (name) {
            	   var index = $scope.Name.indexOf(name);
                   $scope.arrayID.splice(index,1);
                   $scope.Name.splice(index,1);

                };
        },



    };
});
/*drop-down-value directive*/
app.directive('dropDownValue', function($http) {
    return {
        restrict: 'EA',
        templateUrl: 'templateValue.html',
       
    };
});
app.filter('startFrom',function () {
    return function (data,start) {
        return data.slice(start);
        
    };

});

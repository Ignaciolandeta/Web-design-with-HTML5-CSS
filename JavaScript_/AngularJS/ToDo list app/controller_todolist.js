var app = angular.module("myShoppinglist", []);
app.controller("myCtrl", function($scope){
    $scope.products = ["Milk", "Bread", "Eggs"];
    $scope.addItem = function(){
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.products.indexOf($scope.addMe) == -1){
            $scope.products.push($scope.addMe);
        }
        else{
            $scope.errortext = "This item is already in your ToDo List";
        }

    }
    $scope.removeItem = function(x){
        $scope.products.splice(x,1);
    }


});
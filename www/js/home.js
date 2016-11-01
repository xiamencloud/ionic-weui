/**
 * Created by linys on 16/10/20.
 */
angular.module("weui.homeCtrl",[]).
    controller("homeCtrl",function ($scope)
    {
        $scope.expIndex = "";
        $scope.clickCategory = function(index){
            $scope.expIndex = ($scope.expIndex == index) ? '' : index;
        }
    });

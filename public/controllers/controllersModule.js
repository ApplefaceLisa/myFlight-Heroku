/**
 * Created by Yajing Li on 6/25/17.
 */
angular.module('controllersModule', ['servicesModule'])
    .controller('carriersCtrl', function ($scope, dataManagement) {
        let getDataPromise = dataManagement.getCarriers();
        getDataPromise.then(
            // success callback
            function (data) {
                $scope.carriers = data.data;
                //console.log(data.data);
            },
            // error callback
            function (data, status) {
                $scope.errorMessage = status;
            });
    }).controller('carriersDetailsCtrl', function ($scope, dataManagement, $routeParams) {

        let getDataPromise = dataManagement.getCarriersDetails($routeParams.carrierName);
        getDataPromise.then(
            function (data) {
                //console.log(data.data[0].carrier, data.data[0].routes);
                $scope.carrierName = data.data[0].carrier;
                $scope.flightDtls = data.data[0].routes;
            },
            function (data, status) {
                $scope.errorMessage = status;
            }
        );
    }).controller('flightDetailsCtrl', function($scope, dataManagement, $routeParams) {
        $scope.pageSize_options = [
            {name: "5", value: 5},
            {name: "10", value: 10},
            {name: "15", value: 15},
            {name: "20", value: 20}
        ];
        $scope.currentPage = 0;
        $scope.pageSize = $scope.pageSize_options[1].value;

        let getDataPromise = dataManagement.getFlightDetails(
                                    $routeParams.carrierName,
                                    $routeParams.flightName);

        getDataPromise.then(
            function (data) {
                let details = data.data[0];
                $scope.carrierName = details.carrier;
                $scope.flightName = details.route;
                $scope.flightDtls = details.details;
                $scope.dataLen = $scope.flightDtls.length;
                $scope.numberOfPages = function(){
                    return Math.ceil($scope.dataLen/$scope.pageSize);
                };
            },
            function (data, status) {
                $scope.errorMessage = status;
            }
        );
    }).filter('startFrom', function() {
        return function(input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    });


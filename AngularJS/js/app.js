var app = angular.module('app', ['angular.filter'])

app.controller('MainController', function ($scope, $http) {
    $scope.total = 0;
    $scope.size_total = 0;
    $scope.syrup_total = 0;
    $scope.extra_total = 0;
    $scope.price = 0;
	$scope.username = "";
	$scope.city = "";
	$scope.jartype = "";
	$scope.selectedproducts = [];
	
    $scope.message = "Order!!!";
    $http.get('http://localhost:3000/cities').
        success(function (data) {
            $scope.cities = data.cities;
         
			
        });

     $http.get('http://localhost:3000/products').
          success(function (data) {
            $scope.products = data;
		
			
        });
		
	  $http.get('http://localhost:3000/honeyjars').
          success(function (data) {
            $scope.jars = data.jars;
			$scope.jar = $scope.jars[0];
        });

		
	
	
	$scope.login = function () {
	
	
		var loginObj = {
            "username": $scope.username,
            "password": $scope.password
        };	
		
		var res = $http.post('http://localhost:3000/login', loginObj);
        res.success(function (data, status, headers, config) {
            $scope.message = data.response;
			 if ($scope.message == "Success") {
			 window.location.href = "index.html#close";
			 }
        });
        res.error(function (data, status, headers, config) {
            alert("failure message: " + JSON.stringify({data: data}));
        });
	
	};

  
    $scope.add = function () {
	

	 
	  angular.forEach($scope.products, function(value, key){
      
	   if (value.city == $scope.city.name && value.jartype == $scope.jartype.type) {
	   
	   var obj = {
          city: value.city,
		  jartype : value.jartype,
		  price : value.price
        };
          $scope.selectedproducts.push(obj);
		 }
	});
      
    };

  
  
});

function openLogin() {
	
	window.location.href = "index.html#openLogin";

}
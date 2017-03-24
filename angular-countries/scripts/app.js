var app = angular.module('countryApp', 
							['ui.router']);	

app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider.state('countries', {
		url: '/countries',
		controller: 'countryList',
		templateUrl: './views/country-list.html'
	}).state('one', {
		url: '/countries/{id}',
		controller: 'countryController',
		templateUrl: './views/country.html',
	});

	$urlRouterProvider
      .when('/', '/countries')
      .when('', '/countries');

}).controller('countryList', function ($scope, $http) {
	$http.get('countries.json').then(function (res) {
		$scope.countryList = res.data;
	});
	
}).controller('countryController', function ($scope, $stateParams, $http) {
	$http.get('countries.json').then(function (res) {
		$scope.countryArr = res.data.filter(function (obj) { return obj.id == $stateParams.id;} );
		$scope.country = $scope.countryArr[0];
		$scope.renderMap($scope.country.lat, $scope.country.long);
	});
	var map;

	$scope.renderMap = function (lat, lng) {
		var lat = parseFloat(lat),
			lng = parseFloat(lng);

		map = new google.maps.Map(document.getElementById('map'), {
	      center: {
	      	lat,
	      	lng
	      },
	      scrollwheel: false,
	      zoom: 8
	    });
	};

	$scope.change = function (city) {
		$scope.renderMap(city.lat, city.long);
	};
}).directive('cityDropdown', function () {
	return {
		restrict: 'E',
		scope: {
			cities: '=',
			change: '&'
		},
		templateUrl: './views/city-dropdown-directive.html',
		link: function ($scope) {
			$scope.hasInputClicked = false;
			//$scope.selectCity = $scope.change;
			$scope.selectCity = function (obj) {
				$scope.searchCity = obj.city.name;
				$scope.hasInputClicked = false;
				$scope.change(obj);
			};
		}
	}
});
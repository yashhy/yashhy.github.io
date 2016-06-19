angular.module('TimelineView', 
					['ui.router',
                	  'highcharts-ng'])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('home', {
            url : '/home',
            controller : 'HomeCtrl',
            templateUrl : '../views/home.html'
        });

        $urlRouterProvider.otherwise('/home');

    });



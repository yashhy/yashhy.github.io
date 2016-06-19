angular.module('TimelineView').directive('goalBar', function () {	  
    return {
    	restrict: 'E',
    	replace: true,
    	scope: {
    		percentage: '@'
    	},
    	templateUrl: '../views/goal-bar.html',
    	link: function (scope, element, attr) {
    		scope.getPercentageLeft = function () {
    			var width = parseInt(scope.percentage);
    			if (width) {
    				return 'width-' + width;
    			}
    			return 'width-0';
    		};

            scope.getPercentageRight = function () {
                var width = 100 - parseInt(scope.percentage);
                if (width) {
                    return 'width-' + width;
                }
                return 'width-0';
            };
    	}
    }
});
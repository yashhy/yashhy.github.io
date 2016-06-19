angular.module('TimelineView').directive('stackBar', function () {	  
    return {
    	restrict: 'E',
    	replace: true,
    	scope: {
    		left: '=',
    		right: '=',
    		color: '@'
    	},
    	templateUrl: './views/stack-bar.html',
    	link: function (scope, element, attr) {
    		scope.getLeftClass = function () {
    			var width = parseInt(scope.left[1]),
    				color = scope.left[0];
    			if (width && color) {
    				return 'width-' + width + ' ' + color;
    			}
    			return 'width-0';
    		};

    		scope.getRightClass = function () {
    			var width = parseInt(scope.right[1]),
    				color = scope.right[0];
    			if (width && color) {
    				return 'width-' + width + ' ' + color;
    			}
    			return 'width-0';
    		};
    	}
    }
});
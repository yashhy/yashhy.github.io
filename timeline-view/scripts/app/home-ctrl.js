angular.module('TimelineView').controller('HomeCtrl', 
  function($scope, $http) {
    init();

    function init() {
      $scope.timeLineHeader = getTimeLineHeader();
      $scope.chartConfig = getChartConfig();

      getTimeLineData().then(function (response) {
        $scope.timeLineData = response.data;
      });

      $scope.openDetailPosition = -1;
    }

    $scope.toggleRow = function (index, event) {
      if (index === -1) {
        $scope.openDetailPosition = index;
        return;
      }
      $scope.openDetailPosition = $scope.openDetailPosition == index ? -1 : index;
      $scope.chartConfig.series = $scope.timeLineData[index].graph;
      event.stopPropagation();
    };

    function getTimeLineHeader() {
      var headerArr = [],
          today = new Date().getTime();
          back = 3,
          front = 4,
          oneDay = 86400000;

      for (var i = back; i > 0; i--) {
         headerArr.push(today - (oneDay * i));
      }
      for (var i = 1; i <= front; i++) {
         headerArr.push(today + (oneDay * i));
      }
      return headerArr;
    }

    function getTimeLineData() {
      return $http.get('./data/time-line-data.json');
    }

    function getChartConfig() {
      return {
        title: {
            text: ''
        },
        xAxis: {
            categories: ['25 May', '1 June', '8 June', '15 June', '27 June', '4 July', '13 July', '20 July', '27 July'],
            gridLineWidth: 1,
            labels: {
              style: {
                color: '#aeaeae'
              }
            },
            tickInterval: 2
        },
        yAxis: {
            title: {
                text: ''
            },
            gridLineDashStyle: 'longdash',
            labels: {
              style: {
                color: '#aeaeae'
              }
            }
        },
        options: {
          tooltip: {
            borderRadius: 6,
            borderWidth: 0,
            pointFormat: '<b>{point.y}</b>',
            headerFormat: '',
            backgroundColor: '#343a3a',
            style: {
              color: 'white'
            }
          },
          legend: {
            enabled: false
          },
          plotOptions:{
              line: {
                  marker: {
                    enabled: false,
                    radius: 1.5
                  }
              }
          }
        },
        series: [],
        size: {
            height: '250',
            width: '450'
        },
        credits: {
          enabled: false
        }
      };
    }

    $scope.onDetailClick = function(event) {
      event.stopPropagation();
    };

});
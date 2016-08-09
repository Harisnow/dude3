var app=angular.module("app",[]).filter('datafilter',function(){
     return function(inp,s,e){
       return inp.slice(s,e);
       console.log(s);
     }
 });
app.controller('myCtrl', function($scope) {
 $scope.data=[

     {"year":"1986","under500":47493,"above500":27842},
     {"year":"1987","under500":37023,"above500":20654},
     {"year":"1989","under500":35872,"above500":19291},
     {"year":"1990","under500":27920,"above500":18849},
     {"year":"1991","under500":27182,"above500":20724},
     {"year":"1992","under500":25238,"above500":22118},
     {"year":"1993","under500":25396,"above500":24140},
     {"year":"1994","under500":24216,"above500":21502},
     {"year":"1995","under500":24632,"above500":21851},
     {"year":"1996","under500":28993,"above500":15668},
     {"year":"1997","under500":29526,"above500":15978},
     {"year":"1998","under500":27898,"above500":15615},
     {"year":"1999","under500":28841,"above500":14954},
     {"year":"2000","under500":24629,"above500":12651},
     {"year":"2001","under500":61777,"above500":32871},
     {"year":"2002","under500":47493,"above500":27842},
     {"year":"2003","under500":37023,"above500":20654},
     {"year":"2004","under500":35872,"above500":19291},
     {"year":"2005","under500":27920,"above500":18849},
     {"year":"2006","under500":27182,"above500":20724},
     {"year":"2007","under500":25238,"above500":22118},
     {"year":"2008","under500":25396,"above500":24140},
     {"year":"2009","under500":24216,"above500":21502},
     {"year":"2010","under500":24632,"above500":21851},
     {"year":"2011","under500":28993,"above500":15668},
     {"year":"2012","under500":29526,"above500":15978},
     {"year":"2013","under500":27898,"above500":15615},
     {"year":"2014","under500":28841,"above500":14954},
     {"year":"2015","under500":24629,"above500":12651},
     {"year":"2016","under500":6047,"above500":3563}

     ];

$scope.s=0;
   $scope.e=$scope.s+3;
               $scope.sortColumn = "year";
    $scope.reverseSort = false;

            $scope.sortData = function (column) {
                $scope.reverseSort = ($scope.sortColumn == column) ?
                    !$scope.reverseSort : false;
                $scope.sortColumn = column;
            }

            $scope.getSortClass = function (column) {

                if ($scope.sortColumn == column) {
                    return $scope.reverseSort
                      ? 'arrow-down'
                      : 'arrow-up';
                }

                return '';
            }

            $scope.pagination=[];
   for(var i=0;i<($scope.data.length)/3;i++){
     $scope.pagination.push(i+1);
   }
   $scope.select=function(no){
       $scope.s=(no-1)*3;
       $scope.e=($scope.s)+3;
   }
});
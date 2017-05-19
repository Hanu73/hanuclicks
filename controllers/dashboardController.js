myappController.controller('dashboardController',function($scope,$http,$location,$cookies,$window){
    $scope.userData=JSON.parse($window.localStorage.getItem('myAccount'));
    console.log($scope.userData);

    $scope.operationType='Operation Type';
    $scope.startDate=new Date();
    $scope.endDate=new Date();
    $scope.startTime= new Date(1970, 0, 1, 10, 57, 0);
    $scope.endTime=new Date(1970, 0, 1, 10, 57, 0);
  $http({
         method:'GET',
         url:'http://192.168.1.7:8181/api/getService'
    }).success(function(data,status){
    console.log(data);
      $scope.service=data;
      $scope.ser=data[0];
    }).error(function(data,status){
      console.log(data);
    })
    $scope.findTraces=function(){
        $("#loadinForfindTrace").show();
        var startDate,startTime,startTs,endDate,endTime,endTs;
        startDate=moment( $scope.startDate).format('YYYY-MM-DD');
        startTime= moment($scope.startTime).format('HH:mm:ss');
        startTs=startDate+startTime;
        startTs=moment(startTs).format();
        endDate=moment( $scope.endDate).format('YYYY-MM-DD');
        endTime= moment($scope.endTime).format('HH:mm:ss');
        endTs=endDate+endTime;
        endTs=moment(endTs).format();
            var sendingObj={};
        sendingObj.serviceName=$scope.ser.value;
        sendingObj.fromDate=startTs;
        sendingObj.toDate=endTs;
        sendingObj.limit=10;
        sendingObj.pageSize=1;

        sendingObj=JSON.stringify(sendingObj);
        console.log(sendingObj);
        $http({
            method:'POST',
            data:sendingObj,
            url:'http://192.168.1.7:8181/api/getTraces'
        }).success(function(data,status){
            $("#loadinForfindTrace").hide();
            console.log(data);
            $scope.traceIds=data;

        }).error(function(data,status) {
            console.log(data)
        });

    }

$scope.getTrace=function(traceID){
    $window.localStorage.setItem('traceID',traceID);
      var traceId= $window.localStorage.getItem('traceID');
    if(traceId){
        $location.path('/traceDetails');
    }else{
        alert("hi it does not containe the trace ID");

    }



}


    $scope.filterByOperationType=function(){
        if($scope.operationType=='Operation Type'){
            $scope.operationType='';
        }
        var startDate,startTime,startTs,endDate,endTime,endTs;
        startDate=moment( $scope.startDate).format('YYYY-MM-DD');
        startTime= moment($scope.startTime).format('HH:mm:ss');
        startTs=startDate+startTime;
        startTs=moment(startTs).format();
        endDate=moment( $scope.endDate).format('YYYY-MM-DD');
        endTime= moment($scope.endTime).format('HH:mm:ss');
        endTs=endDate+endTime;
        endTs=moment(endTs).format();
        var sendingObj={};
        sendingObj.operationType=$scope.operationType;
        sendingObj.operationKey=$scope.operationKey;
        sendingObj.fromDate=startTs;
        sendingObj.toDate=endTs;
        sendingObj.limit=10;
        sendingObj.pageSize=1;
         sendingObj.serviceName=$scope.ser.value
        sendingObj=JSON.stringify(sendingObj)
        console.log(sendingObj);
        $http({
            method:'POST',
            data:sendingObj,
            url:'http://192.168.1.7:8181/api/getFilterData'
        }).success(function(data,status){
      console.log(data);
            $scope.traceIds=data
        }).error(function(data,status){

        })



    }


$scope.getFulltransaction=function(obj){
console.log(obj);
    $http({
        method:'GET',
        url:'http://192.168.1.7:9411/api/v1/trace/'+obj.traceId +'?serviceName='+obj.serviceName
    }).success(function(data,status){
        console.log(data);
    }).error(function(data,status){
        console.log(data);
    })


}





    $scope.userLogout=function(){
        $window.localStorage.removeItem('myAccount');
        $location.path('/login')
    }



});
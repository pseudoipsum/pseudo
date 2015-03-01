function BestBuyApi($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        success(function(data) {
            $scope.greeting = data;
        });
}


function ExpediaApi($scope, $http) {
    $http.get('http://terminal2.expedia.com/packages?departureDate=2015-04-20&originAirport=SEA&destinationAirport=LHR&returnDate=2015-04-22&regionid=6000479&adults=2&limit=1&nonstop=true&apikey=mDh5jYyXXqxC1ARt8dYvgonmQtZMYRQg').
        success(function(data) {
            $scope.greeting = data;
        });
}

function MacysApi($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        success(function(data) {
            $scope.greeting = data;
        });
}


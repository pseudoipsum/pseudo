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



 

http://api.remix.bestbuy.com/v1/products(longDescription=sennheiser*%7Csku=4961487)?show=longDescription,name&pageSize=1&page=1&apiKey=z34g2b4eqby8krm55rev4trj&format=json

?show=regularPrice
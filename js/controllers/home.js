app.controller('HomeController', ['$scope', '$http', 'teaService',  function ($scope, $http, teaService) {
  // console.log("home");
  console.log(teaService);
  $scope.teaList = teaService.teaList;
  $scope.bagQuantity = teaService.bagQuantity;
  // $scope.addToBag = teaService.addToBag;
  $scope.addToBag = function(tea) {
    var preBagTea = {};
    preBagTea.price = tea.price;
    preBagTea.quantity = tea.quantity;
    preBagTea.subtotal = parseInt(preBagTea.price / 100 * preBagTea.quantity).toFixed(2);
    preBagTea.name = tea.name;
    preBagTea.imageUrl = tea.imageUrl;
    preBagTea.caffeineScale = tea.caffeineScale;
    preBagTea.ingredients = tea.ingredients;
    preBagTea.rating = tea.rating;

    teaService.addToBag(preBagTea)
    $scope.bagQuantity = teaService.getter()
  };


  $scope.allCategories = ["dark", "cold", "awesome", "dry", "hot", "summer", "lucid", "warm", "winter", "spring"];
  // $scope.categoryGrabber = function() {
  //   // console.log("grabber tester");
  //   for (var i = 0; i < $scope.teaList.length; i++) {
  //     // console.log(i);
  //     // console.log($scope.teaList[i]["categories"]);
  //     for (var j = 0; j < $scope.teaList[i]["categories"].length; j++) {
  //       // console.log(j);
  //       // console.log("**************");
  //       $scope.allCategories.push($scope.teaList[i]["categories"][j]);
  //       console.log($scope.allCategories);
  //     };
  //   };
  // };


}]);

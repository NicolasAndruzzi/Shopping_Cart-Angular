app.controller('ShoppingCartController', ['$scope', '$http', 'teaService',  function ($scope, $http, teaService) {
  $scope.cartItems = teaService.checkoutBagObject;
}]);

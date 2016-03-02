var app = angular.module('teaApp', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'partials/itemList.html',
      controller: 'HomeController'
    })
    .when('/checkout', {
      templateUrl: 'partials/shoppingCart.html',
      controller: 'ShoppingCartController'
    })
});

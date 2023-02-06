var app = angular.module("myApp", ["ngRoute"]);

// Single page
app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  // Chuyển trang
  $routeProvider
    .when("/home", {
      templateUrl: "pages/home.html",
      controller: gauBongController,
    })
    .when("/shop", {
      templateUrl: "pages/shop.html",
    })
    .when("/page", {
      templateUrl: "pages/page.html",
    })
    .when("/block", {
      templateUrl: "pages/block.html",
    })
    .when("/contact", {
      templateUrl: "pages/contact.html",
    })
    .when("/detail/:id", {
      templateUrl: "pages/detail.html",
      controller: DetailController,
    })
    .otherwise({
      redirectTo: "/home",
    });
});

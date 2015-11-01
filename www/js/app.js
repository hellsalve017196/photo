//modules that are required for this app
var app = angular.module('starter', ['ionic','ngCordova','starter.controller']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }

  });
});


// default routes

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('photo', {
    url: '/',
    templateUrl: 'templates/photo.html',
    controller:'photoCtrl'
  });

  $urlRouterProvider.otherwise('/');

});

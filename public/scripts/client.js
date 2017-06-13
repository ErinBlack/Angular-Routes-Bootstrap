console.log('js');

var app = angular.module('routeApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl:' views/partials/home.html',
    controller: 'DefaultController as dc'
  }).when('/link', {
    templateUrl: 'views/partials/link.html',
    controller: 'LinkController as lk'
  }).when('/groot', {
    templateUrl: 'views/partials/groot.html',
    controller: 'GrootController as gc'
  }).when('/the-doctor', {
    templateUrl: 'views/partials/the-doctor.html',
  });
});










app.config(function($routeProvider){
  $routeProvider.when('/', {
    template: '<div id="red"><h2>First Route</h2></div>',
    controller: 'DefaultController as dc'
  }).when('/blue', {
    template: '<div id="blue"><h2>Second Route</h2></div>'
  }).when('/yellow', {
    templateUrl: 'views/partials/yellow.html',
    controller: 'YellowController as yc'
  });
});

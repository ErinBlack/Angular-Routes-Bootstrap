console.log('js');

var app = angular.module('routeApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl:' views/partials/home.html',
    controller: 'DefaultController as dc'
  }).when('/link', {
    templateUrl: 'views/partials/link.html',
  }).when('/groot', {
    templateUrl: 'views/partials/groot.html',
  }).when('/the-doctor', {
    templateUrl: 'views/partials/the-doctor.html',
  });
});

//setting defualt controller
app.controller('DefaultController', DefaultController);

function DefaultController(){
  console.log('defualt controller is loaded');
}

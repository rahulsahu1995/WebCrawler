angular.module('webApp', ['firebase']).
		value('fbURL', 'https://angularjs-projects.firebaseio.com/').
				factory('Projects', function(angularFireCollection, fbURL) {
					return angularFireCollection(fbURL);
				}).config(function($routeProvider) {
					$routeProvider.
							when('/', {controller:HomeCtl, templateUrl:'./projsp/Welcome.jsp'}).
							when('/addURL', {controller:ProductCtl, templateUrl:'./projsp/AddURL.jsp'}).
							when('/about', {controller:AboutCtl, templateUrl:'./projsp/AboutUs.jsp'}).
							when('/signIn', {controller:DefaultCtl, templateUrl:'./projsp/SignIn.jsp'}).
							when('/signUp', {controller:DefaultCtl, templateUrl:'./projsp/UserRegistration.jsp'}).
							when('/carrer', {controller:DefaultCtl, templateUrl:'./projsp/Carrer.jsp'}).
							when('/contactus', {controller:DefaultCtl, templateUrl:'./projsp/ContactUs.jsp'}).
							when('/conforreq', {controller:DefaultCtl, templateUrl:'./projsp/RequestForServices.jsp'}).
							otherwise({redirectTo:'/'});
				});
 
function HomeCtl($scope) {
	$scope.value="Home page" ;
}
     
function ProductCtl($scope) {
	$scope.value="Product Page" ;
}
 
function AboutCtl($scope) {
	$scope.value="About Page" ;
}
     
function DefaultCtl($scope) {
	$scope.value="No link called so far ....." ;
}
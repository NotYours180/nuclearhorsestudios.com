define([],function(){return function($scope,CouchFactory,$cookies){$scope.login={},$scope.loggedIn=!1,$scope.isLoggedIn=function(){return $scope.loggedIn=!!$cookies.AuthSession,$scope.loggedIn},$scope.login=function(){CouchFactory.logIn($scope.login.username,$scope.login.password).then(CouchFactory.getSession)}}});
define([],function(){return function($http,$cookies){var factory;return factory={host:"http://"+window.location.host+"/db",isLoggedIn:!1,sessionInfo:{},logIn:function(username,password){var data={name:username,password:password};return $http.post(factory.host+"/_session",data).success(factory._setSessionInfo)},getSession:function(){return $http.get(factory.host+"/_session").success(factory._setSessionInfo)},checkIfLoggedIn:function(){var hasAuthSession=void 0!==$cookies.AuthSession,hasSessionInfo=void 0!==factory.sessionInfo.userCtx&&null!==factory.sessionInfo.userCtx.name;return this.isLoggedIn=hasAuthSession&&hasSessionInfo,factory.isLoggedIn},_setSessionInfo:function(data){factory.sessionInfo=data,factory.checkIfLoggedIn()}},factory.getSession(),factory}});
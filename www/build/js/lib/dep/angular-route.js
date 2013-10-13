!function(e,t){function n(e,t){return u(new(u(function(){},{prototype:e})),t)}function r(){function e(e,t){var n=t.caseInsensitiveMatch,r={originalPath:e,regexp:e},i=r.keys=[];return e=e.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g,function(e,t,n,r){var o="?"===r?r:null,a="*"===r?r:null;return i.push({name:n,optional:!!o}),t=t||"",""+(o?"":t)+"(?:"+(o?t:"")+(a&&"(.+)?"||"([^/]+)?")+")"+(o||"")}).replace(/([\/$\*])/g,"\\$1"),r.regexp=new RegExp("^"+e+"$",n?"i":""),r}var t={};this.when=function(n,r){if(t[n]=u({reloadOnSearch:!0},r,n&&e(n,r)),n){var i="/"==n[n.length-1]?n.substr(0,n.length-1):n+"/";t[i]=u({redirectTo:n},e(i,r))}return this},this.otherwise=function(e){return this.when(null,e),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(e,r,i,o,h,d,m,g){function v(e,t){var n=t.keys,r={};if(!t.regexp)return null;var i=t.regexp.exec(e);if(!i)return null;for(var o=1,a=i.length;a>o;++o){var s=n[o-1],u="string"==typeof i[o]?decodeURIComponent(i[o]):i[o];s&&u&&(r[s.name]=u)}return r}function y(){var t=$(),n=x.current;t&&n&&t.$$route===n.$$route&&s(t.pathParams,n.pathParams)&&!t.reloadOnSearch&&!w?(n.params=t.params,a(n.params,i),e.$broadcast("$routeUpdate",n)):(t||n)&&(w=!1,e.$broadcast("$routeChangeStart",t,n),x.current=t,t&&t.redirectTo&&(p(t.redirectTo)?r.path(b(t.redirectTo,t.params)).search(t.params).replace():r.url(t.redirectTo(t.pathParams,r.path(),r.search())).replace()),o.when(t).then(function(){if(t){var e,n,r=u({},t.resolve);return c(r,function(e,t){r[t]=p(e)?h.get(e):h.invoke(e)}),l(e=t.template)?f(e)&&(e=e(t.params)):l(n=t.templateUrl)&&(f(n)&&(n=n(t.params)),n=g.getTrustedResourceUrl(n),l(n)&&(t.loadedTemplateUrl=n,e=d.get(n,{cache:m}).then(function(e){return e.data}))),l(e)&&(r.$template=e),o.all(r)}}).then(function(r){t==x.current&&(t&&(t.locals=r,a(t.params,i)),e.$broadcast("$routeChangeSuccess",t,n))},function(r){t==x.current&&e.$broadcast("$routeChangeError",t,n,r)}))}function $(){var e,i;return c(t,function(t){!i&&(e=v(r.path(),t))&&(i=n(t,{params:u({},r.search(),e),pathParams:e}),i.$$route=t)}),i||t[null]&&n(t[null],{params:{},pathParams:{}})}function b(e,t){var n=[];return c((e||"").split(":"),function(e,r){if(0===r)n.push(e);else{var i=e.match(/(\w+)(.*)/),o=i[1];n.push(t[o]),n.push(i[2]||""),delete t[o]}}),n.join("")}var w=!1,x={routes:t,reload:function(){w=!0,e.$evalAsync(y)}};return e.$on("$locationChangeSuccess",y),x}]}function i(){this.$get=function(){return{}}}function o(e,t,n,r,i){return{restrict:"ECA",terminal:!0,priority:1e3,transclude:"element",compile:function(o,a,s){return function(o,a,u){function c(){f&&(f.$destroy(),f=null),p&&(i.leave(p),p=null)}function l(){var u=e.current&&e.current.locals,l=u&&u.$template;if(l){var d=o.$new();s(d,function(o){c(),o.html(l),i.enter(o,null,a);var s=n(o.contents()),m=e.current;if(f=m.scope=d,p=o,m.controller){u.$scope=f;var g=r(m.controller,u);m.controllerAs&&(f[m.controllerAs]=g),o.data("$ngControllerController",g),o.contents().data("$ngControllerController",g)}s(f),f.$emit("$viewContentLoaded"),f.$eval(h),t()})}else c()}var f,p,h=u.onload||"";o.$on("$routeChangeSuccess",l),l()}}}}var a=t.copy,s=t.equals,u=t.extend,c=t.forEach,l=t.isDefined,f=t.isFunction,p=t.isString;t.element,t.noop,t.toJson;var h=t.module("ngRoute",["ng"]).provider("$route",r);h.provider("$routeParams",i),h.directive("ngView",o),o.$inject=["$route","$anchorScroll","$compile","$controller","$animate"]}(window,window.angular);
//# sourceMappingURL=angular-route.js.map
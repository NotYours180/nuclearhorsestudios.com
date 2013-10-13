define(["DbTypeFactory"],function(e){describe("DbTypeFactory",function(){var t,n,r,i,o,a;beforeEach(function(){n={get:function(){},post:function(){}},r="blogpost",i="http://nuclearhorsestudios.com",o="nuclearhorseblog",a="_design/blog",t=e(r,i,o,a)(n)}),describe("add",function(){it("Calls $http.post with the correct url for adding data",function(){spyOn(n,"post").andCallFake(function(e){expect(e).toBe(i+"/"+o)}),t.add({some:"data"})})}),describe("getAll",function(){it("Calls $http.get with the correct url for all records",function(){spyOn(n,"get").andCallFake(function(e){expect(e).toBe(i+"/"+o+"/"+a+"/_view/"+r+"?descending=true")}),t.getAll()})}),describe("getRecent",function(){it("Calls $http.get with the correct url for the 5 most recent records",function(){spyOn(n,"get").andCallFake(function(e){expect(e).toBe(i+"/"+o+"/"+a+"/_view/"+r+"?limit=5&descending=true")}),t.getRecent(5)})}),describe("getPage",function(){var e;beforeEach(function(){e=spyOn(n,"get")}),it("Calls $http.get with the correct url for retrieving the first page, 10 results per page",function(){var n=i+"/"+o+"/"+a+"/_view/"+r+"?skip=0&limit=10&descending=true";t.getPage(1,10),expect(e).toHaveBeenCalledWith(n)}),it("Calls $http.get with the correct url for retrieving the third page, 4 results per page",function(){var n=i+"/"+o+"/"+a+"/_view/"+r+"?skip=8&limit=4&descending=true";t.getPage(3,4),console.log(n),expect(e).toHaveBeenCalledWith(n)})})})});
//# sourceMappingURL=DbTypeFactorySpec.js.map
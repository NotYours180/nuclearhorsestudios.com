define(['Controllers', 'MockHttp'], function(Controllers, MockHttp) {

    describe('blogAddPostController', function() {
        var $scope, blogDataFactory, blogAddPostController;

        blogAddPostController = Controllers.BlogAddPostController;

        beforeEach(function() {
            $scope = {
                $on: function() {}
            };

            $sce = {};

            blogDataFactory = {
                add: function() { return MockHttp; }
            }
        });

        describe('resetPost', function() {

            beforeEach(function() {
                $scope.post       = {};
                $scope.post.title = "Some title";
                $scope.post.body  = "Some Body";
                $scope.post.type  = "Not blogpost";
                $scope.status     = "Not empty";

                blogAddPostController($scope, blogDataFactory);


            });

            it('Resets title', function() {
                $scope.resetPost();
                expect($scope.post.title).not.toBeDefined();
            });

            it('Resets body', function() {
                $scope.resetPost();
                expect($scope.post.body).not.toBeDefined();
            });

            it('Sets type to "blogpost"', function() {
                $scope.resetPost();
                expect($scope.post.type).toBe('blogpost');
            });

            it('Resets scope status', function() {
                $scope.resetPost();
                expect($scope.status).toBe('');
            });
        });

        describe('savePost', function() {

            beforeEach(function() {
                blogAddPostController($scope, blogDataFactory);
                
                $scope.resetPost();
                $scope.title = "Some Title";
                $scope.body  = "Some Body";
                $scope.type  = "blogpost";      
                $scope.addForm = {};
                $scope.addForm.$valid = true;
                MockHttp.successful = true;
            });

            it('Does not post if already posting', function() {
                $scope.isPosting = true;
                var addSpy = spyOn(blogDataFactory, 'add').andCallThrough();

                $scope.savePost();

                expect(addSpy).not.toHaveBeenCalled();
            });

            it('Changes status to "Submitting form ..." while submitting', function() {
                var addSpy = spyOn(blogDataFactory, 'add').andCallFake(function() {
                    expect($scope.status).toBe('Submitting form ...');
                    return MockHttp;
                });

                $scope.savePost();

            });

            it('Calls blogDataFactory.add while submitting', function() {
                var addSpy = spyOn(blogDataFactory, 'add').andCallThrough();

                $scope.savePost();

                expect(addSpy).toHaveBeenCalled();
            });


            it('Changes status to "Form Invalid" when form is invalid.', function() {
                $scope.addForm.$valid = false;

                $scope.savePost();

                expect($scope.status).toBe("Form Invalid");
            });

            it('Does not call blogDataFactory.add when form is invalid', function() {
                $scope.addForm.$valid = false;
                
                var addSpy = spyOn(blogDataFactory, 'add').andCallThrough();

                $scope.savePost();

                expect(addSpy).not.toHaveBeenCalled();
            });

            it('$scope.onAddSuccess is called when successfully adding a blog post', function() {
                var onAddSuccessSpy = spyOn($scope, 'onAddSuccess');

                $scope.savePost();

                expect(onAddSuccessSpy).toHaveBeenCalled();
            });

            it('$scope.onAddSuccess is not called when unsuccessfully adding a blog post', function() {
                MockHttp.successful = false;
                var onAddSuccessSpy = spyOn($scope, 'onAddSuccess');

                $scope.savePost();

                expect(onAddSuccessSpy).not.toHaveBeenCalled();
            });

            it('$scope.OnAddError is called when unsuccessfully adding a blog post', function() {
                MockHttp.successful = false;
                var onAddErrorSpy = spyOn($scope, 'onAddError');

                $scope.savePost();

                expect(onAddErrorSpy).toHaveBeenCalled();
            });

            it('$scope.OnAddError is not called when successfully adding a blog post', function() {
                var onAddErrorSpy = spyOn($scope, 'onAddError');

                $scope.savePost();

                expect(onAddErrorSpy).not.toHaveBeenCalled();
            });
        });
    });
});
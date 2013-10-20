define(['Controllers', 'MockHttp'], function(controllers, mockHttp) {
    'use strict';

    describe('blogAddPostController', function() {
        var $scope, blogDataFactory, blogAddPostController;

        blogAddPostController = controllers.BlogAddPostController;

        beforeEach(function() {
            $scope = {
                $on: function() {}
            };

            blogDataFactory = {
                add: function() { return mockHttp; }
            };
        });

        afterEach(function() {
            mockHttp.successful = true;
            mockHttp.status = 200;
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
                mockHttp.successful = true;
            });

            it('Does not post if already posting', function() {
                $scope.isPosting = true;
                var addSpy = spyOn(blogDataFactory, 'add').andCallThrough();

                $scope.savePost($scope);

                expect(addSpy).not.toHaveBeenCalled();
            });

            it('Changes status to "Submitting form ..." while submitting', function() {
                var addSpy = spyOn(blogDataFactory, 'add').andCallFake(function() {
                    expect($scope.status).toBe('Submitting form ...');
                    return mockHttp;
                });

                $scope.savePost($scope);
            });

            it('Calls blogDataFactory.add while submitting', function() {
                var addSpy = spyOn(blogDataFactory, 'add').andCallThrough();

                $scope.savePost($scope);

                expect(addSpy).toHaveBeenCalled();
            });


            it('Changes status to "Form Invalid" when form is invalid.', function() {
                $scope.addForm.$valid = false;

                $scope.savePost($scope);

                expect($scope.status).toBe("Form Invalid");
            });

            it('Does not call blogDataFactory.add when form is invalid', function() {
                $scope.addForm.$valid = false;
                
                var addSpy = spyOn(blogDataFactory, 'add').andCallThrough();

                $scope.savePost($scope);

                expect(addSpy).not.toHaveBeenCalled();
            });

            it('Sets $scope.isPosting to false after successfully posting', function() {
                expect($scope.isPosting).toBe(false);
                $scope.savePost($scope);
                expect($scope.isPosting).toBe(false);
            });
        });

        describe('onAddError', function() {

            beforeEach(function() {
                blogAddPostController($scope, blogDataFactory);
                
                $scope.resetPost();
                $scope.title = "Some Title";
                $scope.body  = "Some Body";
                $scope.type  = "blogpost";      
                $scope.addForm = {};
                $scope.addForm.$valid = true;
                mockHttp.successful = true;
            });

            it('Is called when unsuccessfully adding a blog post', function() {
                mockHttp.successful = false;
                var onAddErrorSpy = spyOn($scope, 'onAddError');

                $scope.savePost($scope);

                expect(onAddErrorSpy).toHaveBeenCalled();
            });

            it('Is not called when successfully adding a blog post', function() {
                var onAddErrorSpy = spyOn($scope, 'onAddError');

                $scope.savePost($scope);

                expect(onAddErrorSpy).not.toHaveBeenCalled();
            });

            it('Sets $scope.status to "400 - Forbidden: For some reason" when unsuccessfully adding a blog post', function() {
                mockHttp.successful = false;
                mockHttp.data.error = "Forbidden";
                mockHttp.data.reason = "For some reason";
                mockHttp.status = 400;

                $scope.savePost($scope);

                expect($scope.status).toBe('400 - Forbidden: For some reason');
            });
        });

        describe('onAddSuccess', function() {

            beforeEach(function() {
                blogAddPostController($scope, blogDataFactory);
                
                $scope.resetPost();
                $scope.title = "Some Title";
                $scope.body  = "Some Body";
                $scope.type  = "blogpost";      
                $scope.addForm = {};
                $scope.addForm.$valid = true;
                mockHttp.successful = true;
            });


            it('Is called when successfully adding a blog post', function() {
                var onAddSuccessSpy = spyOn($scope, 'onAddSuccess');

                $scope.savePost($scope);

                expect(onAddSuccessSpy).toHaveBeenCalled();
            });

            it('Is not called when unsuccessfully adding a blog post', function() {
                mockHttp.successful = false;
                var onAddSuccessSpy = spyOn($scope, 'onAddSuccess');

                $scope.savePost($scope);

                expect(onAddSuccessSpy).not.toHaveBeenCalled();
            });

            it('Sets $scope.status to "Post Successful!" on a successful post', function() {
                $scope.savePost($scope);

                expect($scope.status).toBe("Post Successful!");
            });
        });
    });
});
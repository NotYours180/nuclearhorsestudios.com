define(['Controllers'], function(controllers) {

    describe('blogAddPostController', function() {
        var $scope, blogDataFactory, blogAddPostController;

        blogAddPostController = controllers.BlogAddPostController;

        beforeEach(function() {
            $scope = {
                $on: function() {}
            };

            $sce = {};

            blogDataFactory = {
                add: function() {}
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
            });

            it('Does not post if already posting', function() {
                $scope.isPosting = true;
                var addSpy = spyOn(blogDataFactory, 'add');

                $scope.savePost();

                expect(addSpy).not.toHaveBeenCalled();
            });
        });
    });
});
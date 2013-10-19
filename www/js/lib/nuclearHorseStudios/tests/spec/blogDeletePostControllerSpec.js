define(['Controllers'], function(controllers) {
    describe('blogDeletePostController', function() {
        var $scope, controller, blogDataFactory;

        beforeEach(function() {
            $scope = {};

            blogDataFactory = {
                delete: function() { return mockHttp; }
            };

            controller = controllers.BlogDeletePostController($scope, blogDataFactory);
        });

        describe('deletePost', function() {
            
            it('Has a deletePost function attached to $scope', function() {
                expect($scope.deletePost).toBeDefined();
            });

            it('Calls the delete method of the blogDataFactory', function() {
                var deleteSpy = spyOn(blogDataFactory, 'delete');
                $scope.deletePost();

                expect(deleteSpy).toHaveBeenCalled();
            });

            it('Calls the delete method with the passed in postId', function() {
                var deleteSpy = spyOn(blogDataFactory, 'delete');
                $scope.deletePost('012345', '1');

                expect(deleteSpy).toHaveBeenCalledWith('012345', '1'); 
            });
        });
    });
});
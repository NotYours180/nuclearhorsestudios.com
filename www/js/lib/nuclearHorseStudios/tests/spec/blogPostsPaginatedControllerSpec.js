define(['Controllers', 'MockHttp'], function(controllers, mockHttp) {
    var controller, blogData, $scope;

    describe('BlogPostsPaginatedController', function() {
        beforeEach(function() {
            blogData = {
                getPage: function(pageNum, itemsPerPage) {
                    var pageData = {
                        rows: [
                            { value: { title: 'Title 1'  } }, 
                            { value: { title: 'Title 2'  } },
                            { value: { title: 'Title 3'  } },
                            { value: { title: 'Title 4'  } },
                            { value: { title: 'Title 5'  } }, 
                            { value: { title: 'Title 6'  } }, 
                            { value: { title: 'Title 7'  } },
                            { value: { title: 'Title 8'  } },
                            { value: { title: 'Title 9'  } },
                            { value: { title: 'Title 10' } }
                        ]
                    };
                    var offset = (pageNum - 1) * itemsPerPage;

                    mockHttp.data = { rows: pageData.rows.slice(offset, offset + itemsPerPage) };
                    return mockHttp;
                }
            };

            $scope = {};
            controller = controllers.BlogPostsPaginatedController($scope, blogData);
        });

        describe('getPage', function() {

            it('Has a function called getPage attached to scope', function() {
                expect($scope.getPage).toBeDefined();
            });

            it('Calls blogDatas getPage function with correct page and item count', function() {
                var getPageSpy = spyOn(blogData, 'getPage').andCallThrough();

                $scope.getPage(2, 3);

                expect(getPageSpy).toHaveBeenCalledWith(2, 3);
            });
        });

        describe('onGetPage', function() {

            it('Sets $scope.posts correctly when getting page 2, 3 results per page', function() {
                var expectedData = [
                    { title: 'Title 4'  },
                    { title: 'Title 5'  }, 
                    { title: 'Title 6'  } 
                ];

                $scope.getPage(2, 3);

                expect($scope.posts).toEqual(expectedData);
            });

            it('Sets $scope.currentPage to 2 upon successfully getting page 2', function() {
                $scope.getPage(2, 3);
                
                expect($scope.currentPage).toBe(2);                
            });
        });
    });
});
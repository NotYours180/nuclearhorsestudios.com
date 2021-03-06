define(['Controllers', 'MockHttp'], function(controllers, mockHttp) {
    'use strict';

    var controller;
    var blogData;
    var $scope = {};
    var postData;

    describe('BlogPostsPaginatedController', function() {
        beforeEach(function() {
            postData = {
                offset: 0,
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

            blogData = {
                getPage: function(pageNum, itemsPerPage) {
                    var offset = (pageNum - 1) * itemsPerPage;

                    mockHttp.data = { 
                        total_rows: 10,
                        offset: offset,
                        rows: postData.rows.slice(offset, offset + itemsPerPage) 
                    };
                    
                    return mockHttp;
                }
            };

            $scope = {};
            controller = controllers.BlogPostsPaginatedController($scope, blogData, {});
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

            it('Sets $scope.itemsPerPage to 3 upon successfully getting page 2, 3 results per page.', function() {
                $scope.getPage(2, 3);
                
                expect($scope.itemsPerPage).toBe(3);                
            });

            it('Sets $scope.totalPosts to 10 with mock 10 rows returned', function() {
                $scope.getPage(1, 5);
                expect($scope.totalPosts).toBe(10);
            });

            it('Sets $scope.numPages to 5 with mock request 2 posts per page', function() {
                $scope.getPage(1, 2);
                expect($scope.numPages).toBe(5);
            });
        });
    });
});
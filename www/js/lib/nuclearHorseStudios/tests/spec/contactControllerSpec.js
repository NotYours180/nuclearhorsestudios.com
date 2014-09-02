define(['Controllers', 'MockHttp'], function(controllers, mockHttp) {
    'use strict';

    describe('ContactController', function() {
        var $scope, contactController, mockContact;

        beforeEach(function() {
            mockContact = {
                name: "Test Name",
                email: "test@example.com",
                comment: "This is a comment",
                type: "contact"
            };

        });

        function initController() {
            $scope = {};
            $scope.contactForm = {};
            $scope.contactForm.$valid = true;

            contactController = controllers.ContactController($scope, mockHttp);
        }

        it('Has a function attached to $scope called submitContact', function(){
            initController();
            $scope.contact = mockContact;

            expect($scope.submitContact).toBeDefined();
        });

        it('Calls $http.get with proper url', function() {
            var postSpy = spyOn(mockHttp, "post").andCallThrough();
            initController();
            $scope.contact = mockContact;
            $scope.submitContact($scope);

            expect(postSpy).toHaveBeenCalledWith("http://nuclearhorsestudios.com/contact", mockContact);
        });        

        it('Does not call $http.get when contact is invalid', function() {
            var postSpy = spyOn(mockHttp, "post");
            initController();
            $scope.contact = mockContact;
            $scope.contactForm.$valid = false;
            $scope.submitContact($scope); 

            expect(postSpy).not.toHaveBeenCalled();
        });

        it('Sets $scope.success to true after a successful post', function() {
            initController();
            $scope.successful = false;
            $scope.contact = mockContact;

            $scope.submitContact($scope);

            expect($scope.successful).toBe(true);
        });

        it('Sets $scope.success to false after an unscuccessful post', function() {
            initController();
            $scope.successful = true;
            mockHttp.successful = false;

            $scope.contact = mockContact;
            $scope.submitContact($scope);
            mockHttp.successful = true;

            expect($scope.successful).toBe(false);
        });

        it('Sets $scope.isPosting to true while the form is posting', function() {
            initController();
            $scope.contact = mockContact;
            $scope.successful = false;
            $scope.isPosting = false;

            spyOn(mockHttp, "success").andCallFake(function() {
                expect($scope.isPosting).toBe(true);

                $scope.isPosting = false;
                return mockHttp;
            });

            $scope.submitContact($scope);
        });
    });
});
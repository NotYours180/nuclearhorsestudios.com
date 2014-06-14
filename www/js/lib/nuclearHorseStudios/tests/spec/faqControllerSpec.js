define(['Controllers'], function(controllers) {
    'use strict';

    describe('FaqController', function() {
        var $scope, faqController, mockFaqData, mock;

        mock = {
            location: { hash: function(h) {} },
            anchorScroll: function() {}   
        };

        beforeEach(function() {
            mockFaqData = [
                {
                    question: "This is question 1",
                    answer: "This is answer 1",
                    hash: "faq1"
                },
                {
                    question: "This is question 2",
                    answer: "This is answer 2",
                    hash: "faq2"
                },
                {
                    question: "This is question 3",
                    answer: "This is answer 3",
                    hash: "faq3"
                }
            ];
        });

        function initController() {
            $scope = {};

            faqController   = controllers.FaqController($scope, mock.location, mock.anchorScroll);
            $scope.faqs     = mockFaqData;
        }

        it('Has FaqController code', function() {
            expect(controllers.FaqController).toBeDefined();
        });

        it('Initializes faq array on $scope', function() {
            initController();
            expect($scope.faqs).toBeDefined();
        });


        describe("scrollToHash", function() {

            it('Has a function attached to $scope called scrollToHash', function() {
                initController();
                expect($scope.scrollToHash).toBeDefined();
            });

            it('Calls $location.hash to set hash to passed in hash.', function() {
                initController();

                var locationHashSpy = spyOn(mock.location, 'hash');

                $scope.scrollToHash('faq1');

                expect(locationHashSpy).toHaveBeenCalledWith('faq1');
            });

            xit('Calls $anchorScroll() after setting location hash', function() {
                initController();

                var asSpy = spyOn(mock, 'anchorScroll');

                $scope.scrollToHash('faq1');

                expect(asSpy).toHaveBeenCalled();
            });
        });
    });
});
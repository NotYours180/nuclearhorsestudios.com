define(['BlogPostDateFilter'], function(blogPostDateFilter) {
    describe('Filter: blogPostDateFilter', function() {

        beforeEach(function() {
            filter = blogPostDateFilter();
        });

        it ('Converts timestamp 1381797059756 to "Mon Oct 14 2013 - 8:30:59 PM"', function() {
            expect(filter(1381797059756)).toBe('Mon Oct 14 2013 - 8:30:59 PM');
        });
    });
});
define(['BlogPostDateFilter'], function(blogPostDateFilter) {
    'use strict';

    describe('Filter: blogPostDateFilter', function() {
        var filter;
        
        beforeEach(function() {
            filter = blogPostDateFilter();
        });
 
        it ('Converts timestamp 1381797059756 to "Mon Oct 14 2013 - 8:30:59 PM"', function() {
          var date = new Date(1381797059756);
          date = date.toDateString() + ' - ' + date.toLocaleTimeString();
 
          expect(filter(1381797059756)).toBe(date);
        });
    });
});
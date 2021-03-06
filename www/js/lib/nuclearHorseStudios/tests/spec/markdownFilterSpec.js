define(['MarkDownFilter'], function(markdownFilter) {
    'use strict';

    describe('Filter: blogPostDateFilter', function() {
        var filter;
        
        beforeEach(function() {
            var $sce = {
                trustAsHtml: function(input) { return input; }
            };

            filter = markdownFilter($sce);
        });

        it ('Converts the text "Hello, world!" to <p>Hello, world!</p>', function() {
            expect(filter("Hello, world!")).toBe('<p>Hello, world!</p>');
        });

        it ('Converts the text "*Hello*, world!" to <p><em>Hello</em>, world!</p>', function() {
            expect(filter("*Hello*, world!")).toBe('<p><em>Hello</em>, world!</p>');
        });

        it ('Converts the text "**Hello**, world!" to <p><strong>Hello</strong>, world!</p>', function() {
            expect(filter("**Hello**, world!")).toBe('<p><strong>Hello</strong>, world!</p>');
        });

        it ('Converts the text "#Text" to <h1 id="text">Text</h1>', function() {
            expect(filter("#Text")).toBe('<h1 id="text">Text</h1>');
        });        

        it ('Converts the text "##Text" to <h2 id="text">Text</h2>', function() {
            expect(filter("##Text")).toBe('<h2 id="text">Text</h2>');
        });

        it ('Converts the text "###Text" to <h3 id="text">Text</h3>', function() {
            expect(filter("###Text")).toBe('<h3 id="text">Text</h3>');
        });
    });
});
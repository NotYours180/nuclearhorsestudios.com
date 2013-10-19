define([], function() {
    'use strict';

    return {
        data: {},
        status: 200,
        successful: true,
        get: function() { return this; },
        post: function() { return this; },
        success: function(fn) { 
            if (this.successful) { fn(this.data, this.status); }
            return this; 
        },
        then: function(fn) {
            fn(this.data, this.status);
            delete this.success;
            delete this.error;
            return this;
        },
        error: function(fn) {
            if (!this.successful) { fn(this.data, this.status); }
            return this; 
        },
        finally: function(fn) {
            fn(this.data, this.status);
        }
    };
});
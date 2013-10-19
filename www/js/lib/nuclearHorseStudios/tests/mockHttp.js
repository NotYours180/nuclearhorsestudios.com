define([], function() {
    return {
        data: { some: 'data' },
        successful: true,
        get: function() { return this; },
        post: function() { return this; },
        success: function(fn) { 
            if (this.successful) { fn(this.data); }
            return this; 
        },
        then: function(fn) {
            fn(this.data);
            delete this.success;
            delete this.error;
            return this;
        },
        error: function(fn) {
            if (!this.successful) { fn(this.data); }
            return this; 
        }
    };
});
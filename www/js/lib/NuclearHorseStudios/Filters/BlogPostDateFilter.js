define([], function() {
    return function() {
        return function(input) {
            var date = new Date(input);
            return date.toDateString() + ' - ' + date.toLocaleTimeString();
        }
    }
});
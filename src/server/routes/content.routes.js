"use strict";

module.exports = function() {
    return [
        {
            // static content
            method: 'GET',
            path: '/{path*}',
            handler : {
                directory: {
                    path: 'public',
                    listing: false,
                    index: true
                }
            }
        }
    ];
}();
/**
 * Created by xiajs on 2018/12/5.
 */

define(function(require, exports, module) {
    var $ = require('jquery');

    exports.sayHello = function() {
        $('#beautiful-sea').toggle('slow');
    };
});

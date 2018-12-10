/**
 * 配置
 */
(function (window, $$) {

    'use strict';

    // http请求
    $$.config("$httpProvider", ["$browser", function ($browser) {
        return {
            "headers": {
                'Content-Type': 'application/json'
            },
            "timeout": 7000,
            "context": "/data/",
            "request": function (config) {
                return config;
            },
            "success": function (data, doback) {
                doback(data);
            },
            "error": function (error, doback) {
                doback(error);
            }
        };
    }]);

    // 选择器
    $$.config("$sizzleProvider", function () {
        return function (selector, context) {
            // 选择sizzle.js作为扩展
            return Sizzle(selector, context);
        };
    });

})(window, window.clay);

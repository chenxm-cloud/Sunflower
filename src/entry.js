import Vue from 'vue';
import App from './App.vue';
import render from 'clay-core';
import Sizzle from 'sizzle';

import '../node_modules/easycss-core/build/easycss.min.css';

// 启动clay
render(window);

// 配置http请求
clay.config("$httpProvider", ["$browser", function ($browser) {
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

// 加强选择器
clay.config("$sizzleProvider", function () {
    return function (selector, context) {
        // 选择sizzle.js作为扩展
        return Sizzle(selector, context);
    };
});

// 引入路由
import routerObj from './router';

//根对象
var vm = new Vue({
    //挂载点
    el: document.getElementById('root'),
    router: routerObj,
    // 启动vue
    render: function (createElement) {
        return createElement(App);
    }
});

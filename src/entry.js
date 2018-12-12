import Vue from 'vue';
import App from './App.vue';
import render from 'clay-core';
import Sizzle from 'sizzle';

import '../node_modules/easycss-core/build/easycss.min.css';

// 启动clay
render(window);

// 配置http请求
clay.config("$httpProvider", ["$browser", $browser =>
    ({
        "headers": {
            'Content-Type': 'application/json'
        },
        "timeout": 7000,
        "context": "/src/assets/",
        "request": config => config,
        "success": (data, doback) => doback(data),
        "error": (error, doback) => doback(error)
    })
]);

// 加强选择器
clay.config("$sizzleProvider", () => (selector, context) => Sizzle(selector, context));

// 引入路由
import routerObj from './router';

//根对象
var vm = new Vue({
    //挂载点
    el: $$('#root')[0],
    router: routerObj,
    // 启动vue
    render: createElement => createElement(App)
});

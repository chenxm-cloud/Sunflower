import Vue from 'vue';
import App from './App.vue';

import '../node_modules/easycss-core/build/easycss.min.css';

import routerObj from './router';// 引入路由
import './clay';// 启用clay
import './component';// 引入组件

//根对象
var vm = new Vue({
    //挂载点
    el: $$('#root')[0],
    router: routerObj,
    // 启动vue
    render: createElement => createElement(App)
});

import Vue from 'vue';
import App from './App.vue';
import clay from './clay';

import '../node_modules/easycss-core/build/easycss.min.css';

import routerObj from './router';// 引入路由

import './component';// 引入组件

//根对象
var vm = new Vue({
    //挂载点
    el: clay('#root')[0],
    router: routerObj,
    // 启动vue
    render: createElement => createElement(App)
});

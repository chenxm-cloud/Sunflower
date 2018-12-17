import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import login_page from '../pages/login.vue';
import main_page from '../pages/main.vue';

const router = new VueRouter({
    routes: [{
        path: '/',
        redirect: 'login'
    },
    {
        path: '/login',
        component: login_page
    },
    {
        path: '/main',
        component: main_page
    }
    ]
});

export default router;

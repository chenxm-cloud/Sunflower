import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import PageOne from '../pages/PageOne.vue';
import PageTwo from '../pages/PageTwo.vue';

const router = new VueRouter({
    routes: [{
        path: '/',
        redirect: 'PageOneLink'
    },
    {
        path: '/PageOneLink',
        component: PageOne
    },
    {
        path: '/PageTwoLink',
        component: PageTwo
    }
    ]
});

export default router;

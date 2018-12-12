import Vue from 'vue';
import example from '../clay/example';

Vue.component('ui-example', {

    template: "<canvas @click='doChange'>非常抱歉，您的浏览器不支持canvas!</canvas>",

    data() {
        return {
            config: {
                "title": "点击组件查看效果",
                "value": 7
            }
        };
    },

    mounted: function () {
        example(this.$el, this.config);
    },

    methods: {
        doChange: function () {
            this.config.value > 9 ? this.config.value = 1 : this.config.value++;
        }
    }

});
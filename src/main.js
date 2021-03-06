import "./css/common.css"
import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);

import {Button,Header, Tabbar, TabItem} from 'mint-ui'
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import 'muse-ui/lib/styles/base.less';
import 'muse-ui/lib/styles/theme.less';

import { GridList } from 'muse-ui';
Vue.use( GridList);

Vue.config.productionTip = false

import router from './router.js'

new Vue({
    render: h => h(App),
    router
}).$mount('#app');

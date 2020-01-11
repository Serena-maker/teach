import Vue from 'vue'
import App from '@/layouts/App.vue'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

import './assets/css/base.css';

import router from './plugins/router.js';

import '@/assets/js/font.js';

import './plugins/axios'

import './config/template'

import Cookies from 'js-cookie'

import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
import { Search } from 'vant';
Vue.use(Search);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')



// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index' //vuexindex
import VueCookies from 'vue-cookies'
import axios from 'axios'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css';
//使用引入的库
Vue.use(VueCookies);
Vue.prototype.$http = axios;
Vue.use(Mint);

Vue.config.productionTip = false;
//rem换算
import './assets/js/flexible.js'
// 通用样式 重置样式
import './assets/css/reset.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

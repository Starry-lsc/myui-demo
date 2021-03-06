// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import store from './store/store'
import echarts from 'echarts'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts

// Vue.directive('chStyle', function (el,binding) {
//     el.style.color='red'
// });
Vue.filter('allBig', function (val) {
  let ser= val.split(' ');
  let ret=[];
  for (let i=0;i<ser.length;i++) {
    ret.push(ser[i].charAt(0).toUpperCase() + ser[i].slice(1))
  }
  return ret.join(' ');
});

Vue.filter('firstBig', function (val) {
  let ser= val.split('.');
  let ret=[];
  for (let i=0;i<ser.length;i++) {
    ret.push(ser[i].charAt(0).toUpperCase() + ser[i].slice(1))
  }
  return ret.join(' ');
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

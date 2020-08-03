import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './mock/index'
// import axios from 'axios';

Vue.config.productionTip = false
Vue.use(ElementUI);

// 挂载axios
// Vue.prototype.$http = axios;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

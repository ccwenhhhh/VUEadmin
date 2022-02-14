import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
// 自定义全局组件
import "./icons";

Vue.config.productionTip = false
Vue.use(ElementUI);
//测试版本1
//测试版本2
//测试版本3
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

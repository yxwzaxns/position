import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import Vuex from 'vuex'

// import Message from 'element-ui'

import App from './App.vue';
import routes from './routes'

Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.use(Vuex)


const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   //NProgress.start();
//   if (to.path == '/login') {
//     sessionStorage.removeItem('user');
//   }
//   let user = JSON.parse(sessionStorage.getItem('user'));
//   if (!user && to.path != '/login' && to.path != '/register') {
//     next({ path: '/login' })
//     // next()
//   } else {
//     next()
//   }
// })
var bus = new Vue();
window.bus = bus;
new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  // store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')

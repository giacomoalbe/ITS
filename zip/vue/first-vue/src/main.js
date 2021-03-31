import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Settings from './components/Settings.vue';

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {
    path: "/settings",
    component: Settings,
  },
  {
    path: "/profile",
    component: Settings,
  },
  {
    path: "/dashboard",
    component: Settings,
  },
];

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

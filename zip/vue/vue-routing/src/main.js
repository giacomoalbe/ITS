import Vue from 'vue'
import VueRouter from 'vue-router';

// snake_case
// kebab-case
// camelCase
// PascalCase

Vue.use(VueRouter);
Vue.config.productionTip = false

import App from './App.vue'

import Dashboard from '@/components/Dashboard.vue';
import Utenti from "@/components/Utenti.vue";
import Ordini from "@/components/Ordini.vue";

const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/utenti",
    component: Utenti,
  },
  {
    path: "/ordini",
    component: Ordini,
  },
  {
    path: '/',
    redirect: "/dashboard",
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

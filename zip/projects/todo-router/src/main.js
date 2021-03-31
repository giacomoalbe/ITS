import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import "./assets/app.css";

import NewTodo from './components/NewTodo.vue';
import TodoList from './components/TodoList.vue';
import DoneList from './components/DoneList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/new",
    component: NewTodo,
  },
  {
    path: "/todo",
    component: TodoList,
  },
  {
    path: "/done",
    component: DoneList,
  },
  {
    path: "/",
    redirect: "/todo",
  }
];

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

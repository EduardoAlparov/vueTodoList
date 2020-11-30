import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import todo from "../components/todo.vue"
import todoView from "../components/todoView.vue"

const routes = [
  {
    path: '/',
    component: todo
  },
  {
    path: '/view/:todo',
    component: todoView
  }
];
export default new Router({ routes, mode: 'history' })

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import SimpleVueValidation from 'simple-vue-validator';
import {store} from './store';
 // Vue.config.productionTip = false

Vue.use(SimpleVueValidation);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  store,
  template: '<App/>'
})

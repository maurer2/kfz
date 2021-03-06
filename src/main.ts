
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
// Vue.use(router)

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')

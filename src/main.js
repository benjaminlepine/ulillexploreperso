import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store/index.js';

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import VueI18n from "vue-i18n";

import messages from './assets/i18n/translate';

Vue.use(VueI18n);
const i18n = new VueI18n({ locale: 'fr', fallbackLocale: 'en', messages});

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

window.Bus = new Vue();
Vue.component('DisplayMessage', require('./components/DisplayMessage.vue').default);

// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('./mocks/browsers')
//   worker.start()
// }

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')

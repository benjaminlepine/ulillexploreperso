import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store.js'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js' // FIXME remove this import
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueI18n from "vue-i18n";
import messages from './assets/i18n/translate'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import ApiServices from './services/ApiServices'

Vue.use(VueI18n);
const i18n = new VueI18n({ locale: 'fr', fallbackLocale: 'en', messages});

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.prototype.$apiService = new ApiServices();

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')

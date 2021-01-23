import Vue from 'vue'
import App from './App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import '@fortawesome/fontawesome-free/css/all.css'

import DelPhoneApp from './components/delPhone/apps/DelPhoneApp.vue';

import store from './store'
import './fontcss/montserrat.css';
import {ue} from './ue4';

import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.component('del-phone-app', DelPhoneApp);

window.ue = {
  ...(window.ue || {}),
  ...ue
};

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

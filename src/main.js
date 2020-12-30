import Vue from 'vue'
import App from './App.vue'

import DelPhoneApp from './components/delPhone/apps/DelPhoneApp.vue';

import './registerServiceWorker'
import store from './store'
import './fontcss/montserrat.css';
import {ue} from './ue4';

Vue.config.productionTip = false

window.ue = {
  ...(window.ue || {}),
  ...ue
};

Vue.component('del-phone-app', DelPhoneApp);
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

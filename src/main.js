import Vue from 'vue'
import App from './App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import '@fortawesome/fontawesome-free/css/all.css'

import DelPhoneApp from './components/delPhone/apps/DelPhoneApp.vue';
import DelPhone from './components/delPhone/DelPhone.vue';

import store from './store'
import './fontcss/montserrat.css';
import {ue} from './ue4';

import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.component('del-phone', DelPhone)
Vue.component('del-phone-app', DelPhoneApp)

window.ue = {
  ...(window.ue || {}),
  ...ue
};

let appList = {
    DelAppMail: './components/delPhone/apps/DelAppMail.vue',
    DelAppMaps: './components/delPhone/apps/DelAppMaps.vue',
    DelAppMusic: './components/delPhone/apps/DelAppMusic.vue',
    DelAppReticle: './components/delPhone/apps/DelAppReticle.vue',
    DelAppVideoSettings: './components/delPhone/apps/DelAppVideoSettings.vue',
    DelAppCameraSetting: './components/delPhone/apps/DelAppCameraSetting.vue',
    DelAppInventory: './components/delPhone/apps/DelAppInventory.vue',
    DelAppFactions: './components/delPhone/apps/DelAppFactions.vue',
    DelAppQuests: './components/delPhone/apps/DelAppQuests.vue',
};

const shrinkwrap = s => s.split(/([A-Z]+[^A-Z]+)/).filter(v => v !== '').join('-').toLowerCase();
const updateApps = alist => {
  for (let app in alist) {
    Vue.component(shrinkwrap(app), () => import(`${alist[app]}`));
  }
}

updateApps(appList);
store.commit('del/setAppList', Object.keys(appList).map(v => shrinkwrap(v)));

window.ue.interface.setAppList = apps => {
  const a = {};
  for (let i in apps) {
    if(!appList[i]) {
      a[i] = apps[i];
    }
  }
  updateApps(a);
  appList = {
    ...appList,
    ...a
  };
  store.commit('del/setAppList', Object.keys(appList));
}

window.uiApp = new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

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
    DelAppCameraSetting: './components/delPhone/apps/DelAppCameraSetting.vue',
    DelAppCrafting: './components/delPhone/apps/DelAppCrafting.vue',
    DelAppFactions: './components/delPhone/apps/DelAppFactions.vue',
    DelAppHealth: './components/delPhone/apps/DelAppHealth.vue',
    DelAppInventory: './components/delPhone/apps/DelAppInventory.vue',
    DelAppMail: './components/delPhone/apps/DelAppMail.vue',
    DelAppMaps: './components/delPhone/apps/DelAppMaps.vue',
    DelAppMusic: './components/delPhone/apps/DelAppMusic.vue',
    DelAppQuests: './components/delPhone/apps/DelAppQuests.vue',
    DelAppReticle: './components/delPhone/apps/DelAppReticle.vue',
    DelAppVideoSettings: './components/delPhone/apps/DelAppVideoSettings.vue',
};

const kebab = s => s.split(/([A-Z]+[^A-Z]+)/).filter(v => v !== '').join('-').toLowerCase();
const updateApps = alist => {
  for (let app in alist) {
    Vue.component(kebab(app), () => import(`${alist[app]}`));
  }
}

updateApps(appList);
store.commit('del/setAppList', Object.keys(appList).map(v => kebab(v)));

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

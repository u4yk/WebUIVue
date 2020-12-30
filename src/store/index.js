import Vue from 'vue'
import Vuex from 'vuex'
import menu from './menu'
import hud from './hud'
import delPhoneStore from './delPhoneStore';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentSection: 'menu',
    health: 0,
    healthMax: 0,
    isDead: false,
  },
  mutations: {
    setCurrentSection (state, val) {
      state.currentSection = val;
    },
    setHealth (state, val) {
      state.health = val;
    },
    setHealthMax (state, val) {
      state.healthMax = val;
    },
    setIsDead (state, val) {
      state.isDead = val;
    },
    updateHealth (state, delta) {
      state.health += delta;
    }
  },
  actions: {
  },
  modules: {
    menu: menu,
    hud: hud,
    del: delPhoneStore
  }
})

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = () => ({
  currentApp: '',
  isOpen: false,
  appList: [],
  recipes: [],
  quests: {},
  isCrafting: false,
})

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

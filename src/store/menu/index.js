import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = () => ({
  currentMenu: 'main',
  currentSubMenu: '',
  audio: {
    master: 50,
    music: 50,
    fx: 50,
    dialogue: 50
  },
  keyBinding: {
    forward: 'W',
    back: 'S',
    strafeLeft: 'A',
    strafeRight: 'D',
    crouch: 'Left Control',
    sprint: 'Left Shift',
    use: 'E',
    fire: 'Left Mouse',
    aim: 'Right Mouse'
  },
  videoResolution: {
    x: 1920,
    y: 1080
  },
  resolutionList: [
    {x: 640, y: 480},
    {x: 1920, y: 1080}
  ]
})

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

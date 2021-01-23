import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = () => ({
  reticleColor: [255,255,255,1],
  displayState: 'main',
  reticleStyle: 'crosshair',
  isReticleOn: false,
  isReticleFired: false,
  cameraPosition: {
    x: 0,
    y: 0,
    z: 0
  },
  inventory: {
    player: [],
    other: []
  }
})

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

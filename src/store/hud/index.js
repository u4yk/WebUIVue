import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = () => ({
  cameraPosition: {
    x: 0,
    y: 0,
    z: 0
  },
  elevatorFloors: -1,
  dialogue: {},
  displayState: 'main',
  inventory: {
    player: [],
    other: []
  },
  isReticleOn: false,
  isReticleFired: false,
  notifications: [],
  reticleColor: [255,255,255,1],
  reticleStyle: 'crosshair',
  perceivedNPCs: [],
  playerXform: {
    pos: {
      x: 0,
      y: 0,
    },
    rot: 0
  },
})

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

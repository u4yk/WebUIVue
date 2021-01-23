export default {
    setIsReticleOn: (state, val) => {
        state.isReticleOn = val;
    },
    setIsReticleFired: (state, val) => {
        state.isReticleFired = val;
    },
    setReticleStyle: (state, val) => {
        state.reticleStyle = val;
    },
    setReticleColor: (state, val) => {
        state.reticleColor = val;
    },
    setShowDialogue: (state, val) => {
        state.showDialogue = val;
    },
    setDisplayState: (state, val) => {
        state.displayState = val;
    },
    updateCameraPosition: (state, val) => {
        state.cameraPosition = val;
    },
    updateInventory: (state, val) => {
        state.inventory = val;
    },
    showRemoteInventory: (state, val) => {
        state.inventory = val;
        state.displayState = 'inventory';
    },
    showDialogue: (state, val) => {
        state.dialogue = val;
        state.displayState = 'dialogue';
    },
    setDialogue: (state, val) => {
        state.dialogue = val;
    }
}

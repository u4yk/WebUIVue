export default {
    addNotifications: (state, val) => {
        state.notifications = [...state.notifications,...val];
    },
    removeNotification: (state, val) => {
        state.notifications = state.notifications.filter(v => v.id !== val);
    },
    setIsReticleOn: (state, val) => {
        state.isReticleOn = val;
    },
    setIsReticleFired: (state, val) => {
        state.isReticleFired = val;
    },
    setNotifications: (state, val) => {
        state.notifications = val;
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
    setPlayerXform: (state, val) => {
        state.playerXform = val;
    },
    setPerceivedNPCs: (state, val) => {
        state.perceivedNPCs = val;
    },
    showElevatorButtons: (state, val) => {
        state.displayState = val.isOn ? 'elevatorpanel' : 'main';
        state.elevatorFloors = val.floors;
    },
    updateCameraPosition: (state, val) => {
        state.cameraPosition = val;
    },
    updateInventory: (state, val) => {
        state.inventory = val;
    },
    showRemoteInventory: (state, val) => {
        state.inventory = val;
    },
    showDialogue: (state, val) => {
        state.dialogue = val;
        state.displayState = val ? 'dialogue' : 'main';
    },
    setDialogue: (state, val) => {
        state.dialogue = val;
    }
}

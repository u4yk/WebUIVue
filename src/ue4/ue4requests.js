import {toUE4} from './ue4lib';
import store from '../store';

export default toUE4({
    quitGame: () => {},
    newGame: () => {},
    saveGame: () => {},
    loadGame: () => {},
    pauseGame: () => {},
    resumeGame: () => {},
    getDialogueOption: (val) => {
        if (val.next === '') {
            store.commit('hud/setDisplayState', 'main');
        }
        
    },
    getSelectedElevatorFloor: () => {
        store.commit('hud/setDisplayState', 'main');
    },
    inventoryTransfer: () => {
        store.commit('hud/setDisplayState', 'main');
    },
    updateScreenResolution: (val) => {
        store.commit('menu/setVideoResolution', val);
    },
    updateCameraPosition: (val) => {
        store.commit('hud/updateCameraPosition', val);
    }
});
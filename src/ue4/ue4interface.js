import {toUEInterface} from './ue4lib';

export default {
    ...toUEInterface({
        setDisplayState: () => {},
        setIsReticleOn: () => {},
        setIsReticleFired: () => {},
        setReticleStyle: () => {},
        setReticleColor: () => {},
        updateCameraPosition: (val) => {console.log(val)},
        updateInventory: () => {},
        showRemoteInventory: (val) => {
            val.player = val.player && val.player.length ? val.player : [];
            val.other = val.other && val.other.length ? val.other : [];
            val.player.map(v => {
                v.name = v.name.replace(/\_c$/i,'');
                return v;
            });
            val.other.map(v => {
                v.name = v.name.replace(/\_c$/i,'');
                return v;
            });
        },
        showDialogue: () => {},
    }, 'hud'),
    ...toUEInterface({
        setMenu: () => {},
        setVideoResolution: () => {},
        setResolutionList: () => {},
    }, 'menu'),
    ...toUEInterface({
        setCurrentSection: () => {},
        setHealth: () => {},
        setHealthMax: () => {},
        setIsDead: () => {},
        updateHealth: () => {},
    })
}

import {toUEInterface} from './ue4lib';

export default {
    ...toUEInterface({
        setDisplayState: () => {},
        setIsReticleOn: () => {},
        setIsReticleFired: () => {},
        setReticleStyle: () => {},
        setReticleColor: () => {},
    }, 'hud'),
    ...toUEInterface({
        setMenu: () => {},
    }, 'menu'),
    ...toUEInterface({
        setCurrentSection: () => {},
        setHealth: () => {},
        setHealthMax: () => {},
        setIsDead: () => {},
        updateHealth: () => {},
    })
}

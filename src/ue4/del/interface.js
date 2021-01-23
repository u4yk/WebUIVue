import {toUEInterface} from '../ue4lib';
import store from '../../store';

export default toUEInterface({
    setCurrentApp: () => {},
    setIsOpen: (v) => {store.commit('hud/setDisplayState', v ? 'del' : 'main');},
}, 'del');

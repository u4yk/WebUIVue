import {toUE4} from '../ue4lib';
import store from '../../store';

export default toUE4({
    delSetPhoneOpenState: () => { },
    repairItem: () => {},
    craftItem: () => {},
    equipItem: () => {},
    setCurrentQuest: val => {
        store.commit('del/setCurrentQuest', val);
    }
});

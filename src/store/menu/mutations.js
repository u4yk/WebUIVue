export default {
    setMenu: (state, val) => {
        state.currentMenu = val;
    },
    setSubMenu: (state, val) => {
        state.currentSubMenu = val;
    },
    setAudio: (state, val) => {
        state.audio = {
            ...state.audio,
            ...val
        };
    },
    setVideoResolution: (state, val) => {
        state.videoResolution = val;
    },
    setResolutionList: (state, val) => {
        state.resolutionList = val;
    },
    setKeyBinding: (state, val) => {
        state.keyBinding = {
            ...state.keyBinding,
            ...val
        }
    }
}

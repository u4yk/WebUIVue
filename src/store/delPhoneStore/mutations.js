export default {
    setIsOpen: (state, val) => {
        state.isOpen = val;
    },
    setCurrentApp: (state, val) => {
        state.currentApp = val;
    },
    setAppList: (state, val) => {
        state.appList = val;
    },
    setRecipes: (state, val) => {
        state.recipes = val;
    },
    setCraftingComplete: (state, val) => {
        state.isCrafting = val;
    }
}

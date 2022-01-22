export default {
    setIsOpen: (state, val) => {
        state.isOpen = val;
    },
    setCurrentApp: (state, val) => {
        state.currentApp = val;
    },
    setCurrentQuest: (state, val) => {
        if (state.quests?.allQuests) {
            state.quests.current = state.quests.allQuests.find(v => v.id === val) || {};
        }
    },
    setAppList: (state, val) => {
        state.appList = val;
    },
    setRecipes: (state, val) => {
        state.recipes = val;
    },
    setQuests: (state, val) => {
        state.quests = val;
    },
    setCraftingComplete: (state, val) => {
        state.isCrafting = val;
    }
}

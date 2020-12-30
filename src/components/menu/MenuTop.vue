<template>
    <div class="menu">
        <MainMenu v-if="isMainMenu"></MainMenu>
        <LoadGame v-if="isLoadGame"></LoadGame>
        <SaveGame v-if="isSaveGame"></SaveGame>
        <Settings v-if="isSettings"></Settings>
    </div>
</template>
<style lang="scss" scoped>
.menu {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 2vw;
    line-height: 8vh;
    background: #fff;
}
</style>
<script>
import MainMenu from './MainMenu.vue';
import LoadGame from './LoadGame.vue';
import SaveGame from './SaveGame.vue';
import Settings from './Settings.vue';

export default {
    name: 'menu-top',
    components: {
        MainMenu,
        LoadGame,
        SaveGame,
        Settings
    },
    computed: {
        isMainMenu () {
            return this.$store.state.menu.currentMenu === 'main'
        },
        isLoadGame () {
            return this.$store.state.menu.currentMenu === 'loadgame'
        },
        isSaveGame () {
            return this.$store.state.menu.currentMenu === 'savegame'
        },
        isSettings () {
            return this.$store.state.menu.currentMenu === 'settings'
        },
    }
}
</script>
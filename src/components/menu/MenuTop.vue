<template>
    <div class="menu">
        <img src="/img/aob1.svg" />
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
    font-size: 2vw;
    line-height: 8vh;
    top: 0;
    left: 0;
    background: #304255;
    img {
        width: 50vw;
        height: auto;
        position: fixed;
        top: 25vh;
        left: 15vw;
    }
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
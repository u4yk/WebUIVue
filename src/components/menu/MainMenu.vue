<template>
    <ul class="main-menu">
        <li @click="toNewGame">New Game</li>
        <li @click="toLoadGame">Load Game</li>
        <li @click="toSaveGame">Save Game</li>
        <li @click="toSettings">Settings</li>
        <li @click="quit">Quit</li>
    </ul>
</template>
<style lang="scss" scoped>
.main-menu {
    list-style-type: none;
    width: 20vw;
    position: absolute;
    top: 10vh;
    right: 5vw;
    text-align: left;
    color: #fff;
    background: rgba(0,0,0,0.5);
    border-radius: 25px;
    padding: 5vh 1vw;

    li {
        height: 8vh;
        cursor: pointer;
        padding: 0 1vw;

        &:hover {
            color: #000;
            background: rgba(255,255,255,0.5);
        }
    }
}
</style>
<script>
export default {
    name: 'main-menu',
    methods: {
        toNewGame () {  
            ue.requests.newGame();
            this.$store.commit('setCurrentSection', 'hud');
        },
        toLoadGame () { 
            this.$store.commit('menu/setMenu','load')
        },
        toSaveGame () { 
            this.$store.commit('menu/setMenu','save')
        },
        toSettings () { 
            this.$store.commit('menu/setMenu','settings')
        },
        quit () {       
            ue.requests.quitGame();        
        }
    }
}
</script>
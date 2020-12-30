<template>
    <div class="settings">
        <ul class="settings-menu">
            <li>Audio</li>
            <li>Video</li>
            <li>Key Config</li>
            <li class="back" @click="toMain">Back to Main</li>
        </ul>
        <AudioConfig v-if="isAudio"></AudioConfig>
        <VideoConfig v-if="isVideo"></VideoConfig>
        <KeyConfig v-if="isKey"></KeyConfig>
    </div>
</template>
<style lang="scss" scoped>
.settings {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
}
.settings-menu {
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
        
        &.back {
            margin-top: 5vh;
        }
    }
}
</style>
<script>
import AudioConfig from './configs/AudioConfig';
import VideoConfig from './configs/VideoConfig';
import KeyConfig from './configs/KeyConfig';

export default{
    name: 'settings',
    components: {
        AudioConfig,
        VideoConfig,
        KeyConfig,
    },
    computed: {
        isAudio () { return this.$store.state.menu.currentSubMenu === 'audio'},
        isVideo () { return this.$store.state.menu.currentSubMenu === 'video'},
        isKey () { return this.$store.state.menu.currentSubMenu === 'key'},
    },
    data () {
        return {};
    },
    methods: {
        toMain () {
            this.$store.commit('menu/setMenu','main');
            this.$store.commit('menu/setSubMenu','');
        },
        toAudio () {
            this.$store.commit('menu/setSubMenu','audio');
        },
        toVideo () {
            this.$store.commit('menu/setSubMenu','video');
        },
        toKey () {
            this.$store.commit('menu/setSubMenu','key');
        },
    }
};
</script>
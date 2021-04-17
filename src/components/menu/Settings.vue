<template>
    <div class="settings">
        <ul class="settings-menu menu">
            <li @click="toAudio">Audio</li>
            <li @click="toVideo">Video</li>
            <li @click="toKey">Key Config</li>
            <li class="back" @click="toMain">Back to Main</li>
        </ul>
        <audio-config v-if="isAudio"></audio-config>
        <video-config v-if="isVideo"></video-config>
        <key-config v-if="isVideo"></key-config>
    </div>
</template>
<style lang="scss" scoped>
.menu {
    list-style-type: none;
    width: 20vw;
    position: absolute;
    top: 10vh;
    right: 5vw;
    text-align: left;
    color: #e7eaec;
    background: #05080e;
    border-radius: 25px;
    padding: 5vh 1vw;

    li {
        height: 8vh;
        cursor: pointer;
        padding: 0 1vw;

        &:hover {
            color: #05080e;
            background: #e7eaec;
        }
    }
}
</style>
<script>

import AudioConfig from './configs/AudioConfig.vue';
import KeyConfig from './configs/KeyConfig.vue';
import VideoConfig from './configs/VideoConfig.vue';

export default{
    name: 'settings',
    components: {
        VideoConfig,
        KeyConfig,
        AudioConfig,
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
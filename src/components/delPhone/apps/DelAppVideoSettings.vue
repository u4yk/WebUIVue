<template>
    <del-phone-app appname="video settings">
        <template v-slot:app-icon>
            <div class="icon"><md-icon class="fa fa-video"></md-icon></div>
        </template>
        <template v-slot:app-main>
            <div class="del-phone-app-video-settings">
                <md-toolbar class="video-resolution">
                    <div class="left">Video Resolution</div>
                    <div class="right">
                        <md-menu md-direction="bottom-end">
                            <md-button md-menu-trigger>{{getVideoSettings['screen-resolution'].x}} X {{getVideoSettings['screen-resolution'].y}}</md-button>
                            <md-menu-content>
                                <md-menu-item v-for="i in getResolutionList" :key="makeKey(i)" @click="selectResolution(i.x,i.y)">{{i.x}} X {{i.y}}</md-menu-item>
                            </md-menu-content>
                        </md-menu>
                    </div>
                </md-toolbar>
                <md-toolbar class="anti-aliasing">
                    <div class="left">Anti-Aliasing</div>
                    <div class="right">
                        <md-menu md-direction="bottom-end">
                            <md-button md-menu-trigger>{{getSettingValue(getVideoSettings['anti-aliasing'])}}</md-button>
                            <md-menu-content>
                                <md-menu-item v-for="(val, idx) in settingValues" :key="idx" @click="setSettingValue('anti-aliasing', idx)">{{val}}</md-menu-item>
                            </md-menu-content>
                        </md-menu>
                    </div>
                </md-toolbar>
                <md-toolbar class="distance">
                    <div class="left">Distance</div>
                    <div class="right">
                        <md-menu md-direction="bottom-end">
                            <md-button md-menu-trigger>{{getSettingValue(getVideoSettings['distance'])}}</md-button>
                            <md-menu-content>
                                <md-menu-item v-for="(val, idx) in settingValues" :key="idx" @click="setSettingValue('distance', idx)">{{val}}</md-menu-item>
                            </md-menu-content>
                        </md-menu>
                    </div>
                </md-toolbar>
                <md-toolbar class="effects">
                    <div class="left">Effects</div>
                    <div class="right">
                        <md-menu md-direction="bottom-end">
                            <md-button md-menu-trigger>{{getSettingValue(getVideoSettings['effects'])}}</md-button>
                            <md-menu-content>
                                <md-menu-item v-for="(val, idx) in settingValues" :key="idx" @click="setSettingValue('effects', idx)">{{val}}</md-menu-item>
                            </md-menu-content>
                        </md-menu>
                    </div>
                </md-toolbar>
                <md-toolbar class="foliage">
                    <div class="left">Foliage</div>
                    <div class="right">
                        <md-menu md-direction="bottom-end">
                            <md-button md-menu-trigger>{{getSettingValue(getVideoSettings['foliage'])}}</md-button>
                            <md-menu-content>
                                <md-menu-item v-for="(val, idx) in settingValues" :key="idx" @click="setSettingValue('foliage', idx)">{{val}}</md-menu-item>
                            </md-menu-content>
                        </md-menu>
                    </div>
                </md-toolbar>
                <md-toolbar class="post-processing">
                    <div class="left">Post-Processing</div>
                    <div class="right">
                        <md-menu md-direction="top-end">
                            <md-button md-menu-trigger>{{getSettingValue(getVideoSettings['post-processing'])}}</md-button>
                            <md-menu-content>
                                <md-menu-item v-for="(val, idx) in settingValues" :key="idx" @click="setSettingValue('post-processing', idx)">{{val}}</md-menu-item>
                            </md-menu-content>
                        </md-menu>
                    </div>
                </md-toolbar>
                <md-toolbar class="shading">
                    <div class="left">Shaders</div>
                    <div class="right">
                        <md-menu md-direction="top-end">
                            <md-button md-menu-trigger>{{getSettingValue(getVideoSettings['shading'])}}</md-button>
                            <md-menu-content>
                                <md-menu-item v-for="(val, idx) in settingValues" :key="idx" @click="setSettingValue('shading', idx)">{{val}}</md-menu-item>
                            </md-menu-content>
                        </md-menu>
                    </div>
                </md-toolbar>
                <md-toolbar class="shadows">
                    <div class="left">Shadows</div>
                    <div class="right">
                        <md-menu md-direction="top-end">
                            <md-button md-menu-trigger>{{getSettingValue(getVideoSettings['shadows'])}}</md-button>
                            <md-menu-content>
                                <md-menu-item v-for="(val, idx) in settingValues" :key="idx" @click="setSettingValue('shadows', idx)">{{val}}</md-menu-item>
                            </md-menu-content>
                        </md-menu>
                    </div>
                </md-toolbar>
                <md-toolbar class="texture">
                    <div class="left">Textures</div>
                    <div class="right">
                        <md-menu md-direction="top-end">
                            <md-button md-menu-trigger>{{getSettingValue(getVideoSettings['texture'])}}</md-button>
                            <md-menu-content>
                                <md-menu-item v-for="(val, idx) in settingValues" :key="idx" @click="setSettingValue('texture', idx)">{{val}}</md-menu-item>
                            </md-menu-content>
                        </md-menu>
                    </div>
                </md-toolbar>
                <md-toolbar class="scale">
                    <input type="range" class="settings-input" v-model="scale" min="34" max="100">
                    <span class="left">Scale</span>
                    <span class="right">{{getSettingValue(getVideoSettings['scale'])}}</span>
                </md-toolbar>
            </div>
        </template>
    </del-phone-app>
</template>
<script>
export default {
    name: 'del-app-video-settings',
    data () {
        return {
            scale: 0,
            settingValues: [
                'Low',
                'Medium',
                'High',
                'Epic',
                'Cinematic'
            ]
        }
    },
    mounted () {
        this.scale = this.$store.state.menu.videoResolution.scale;
    },
    computed: {
        getResolutionList () {
            return this.$store.state.menu.resolutionList;
        },
        getVideoSettings () {
            return this.$store.state.menu.videoResolution;
        }
    },
    methods: {
        selectResolution (x,y) {
            ue.requests.updateScreenResolution({
                ...this.$store.state.menu.videoResolution,
                'screen-resolution': {
                    x: x,
                    y: y
                }
            })
        },
        makeKey(i) {
            return `${i.x}|${i.y}`
        },
        getSettingValue (i) {
            return this.settingValues[i];
        },
        setSettingValue (key, i) {
            const vr = this.$store.state.menu.videoResolution;
            vr[key] = i;
            ue.requests.updateScreenResolution(vr);
        }
    },
    watch: {
        scale (val) {
            this.setSettingValue('scale', val);
        }
    }
}
</script>
<style lang="scss" scoped>
    .md-toolbar {
        min-height: 48px;

        .md-button {
            height: 1em;
        }
    }

    .left {
        float: left;
        width: 50%;
        text-align: left;
        line-height: 1em;
    }
    .right {
        float: right;
        width: 50%;
        line-height: 1em;
    }
    .del-phone-app-video-settings {
        padding: 10%;
        position: absolute;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
    .icon {
        width: 100%;
        height: 100%;
        position: absolute;
        line-height: 42px;
        color: #fff;
        background-image: linear-gradient(to top, #342a4d 0%, #fce9ac 100%);
        text-shadow: -2px -2px rgba(0,0,0,0.7);

        .md-icon::before {
            color: #60c9fa;
            font-size: 22px;
        }
    }
    .settings-input {
        width: 100%;
    }
    .scale {
        padding: 10%;
    }
</style>
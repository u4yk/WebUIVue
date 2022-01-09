<template>
    <del-phone-app appname="camera-setting">
        <template v-slot:app-icon>
            <div class="icon">
                <md-icon class="fa fa-camera"></md-icon>
            </div>
        </template>
        <template v-slot:app-main>
            <div class="del-phone-app-camera-setting">
                <md-toolbar>
                    <input type="range" v-model="x" min="-150" max="150">
                    <span class="left">X</span>
                    <span class="right">{{getX}}</span>
                </md-toolbar>
                <md-toolbar>
                    <input type="range" v-model="y" min="-100" max="100">
                    <span class="left">Y</span>
                    <span class="right">{{getY}}</span>
                </md-toolbar>
                <md-toolbar>
                    <input type="range" v-model="z" min="-50" max="75">
                    <span class="left">Z</span>
                    <span class="right">{{getZ}}</span>
                </md-toolbar>
            </div>
        </template>
    </del-phone-app>
</template>
<script>
export default {
    name: 'del-app-camera-setting',
    data () {
        return {
            x: 0,
            y: 0,
            z: 0
        }
    },
    mounted () {
        const pos = this.$store.state.hud.cameraPosition;
        
        this.x = pos.x;
        this.y = pos.y;
        this.z = pos.z;
    },
    computed: {
        getX () {
            return this.$store.state.hud.cameraPosition.x;
        },
        getY () {
            return this.$store.state.hud.cameraPosition.y;
        },
        getZ () {
            return this.$store.state.hud.cameraPosition.z;
        }
    },
    methods: {
        updatePosition (key, pos) {
            const out = this.$store.state.hud.cameraPosition;
            out[key] = pos;
            ue.requests.updateCameraPosition(out);
        }
    },
    watch: {
        x (val) {
            this.updatePosition('x', val);
        },
        y (val) {
            this.updatePosition('y', val);
        },
        z (val) {
            this.updatePosition('z', val);
        },
    }
}
</script>
<style lang="scss" scoped>
    .icon {
        width: 100%;
        height: 100%;
        position: absolute;
        line-height: 42px;
        color: #fff;
        background-image: linear-gradient(to top, #09140a 0%, #860516 100%);
        text-shadow: -1px -2px rgba(0,0,0,0.7);

        .md-icon::before {
            color: #f18484;
            font-size: 24px;
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
    .del-phone-app-camera-setting {
        padding: 10%;
        input {
            width: 100%;
        }
    }
</style>
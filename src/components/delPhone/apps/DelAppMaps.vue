<template>
    <del-phone-app appname="maps">
        <template v-slot:app-icon><div class="icon"><md-icon class="fa fa-map"></md-icon></div></template>
        <template v-slot:app-main>
            <div class="del-phone-app-maps">
                <div class="del-phone-map-main"></div>
                <md-icon class="fa fa-location-arrow" :style="getRotationStyle"></md-icon>
            </div>
        </template>
    </del-phone-app>
</template>
<script>
export default {
    name: 'del-app-maps',
    computed: {
        getMapLocation () {
            const pos = this.$store.state.hud.playerXform.pos;
            const scale = 1000;
            pos.x /= scale;
            pos.y /= scale;
            return `transform: translate(${pos.x}px, ${pos.y}px);`;
        },
        getRotationStyle () {
            const z = this.$store.state.hud.playerXform.rot + 45;
            return `transform: rotate(${z}deg);`;
        }
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
        background-image: linear-gradient(45deg, #222d3f 0%, #237ff8 100%);
        text-shadow: -2px -2px rgba(0,0,0,0.7);

        .md-icon{
            &::before {
                color: #fcfcfc;
                font-size: 22px;
            }
        }
    }
    .del-phone-map-main {
        position: absolute;
        transform: translate(0,0);
    }
    .del-phone-app-maps {
        position: relative;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;

        .fa-location-arrow {
            position: absolute;
            transform: rotate(0);
            top: calc(50% - 1rem);
            left: calc(50% - 1rem);
            height: 1rem;
            width: 1rem;
        }
    }
</style>
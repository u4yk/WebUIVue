<template>
    <div :class="isAnimating">
        <div class="top" :style="getBackground"></div>
        <div class="bottom" :style="getBackground"></div>
        <div class="left" :style="getBackground"></div>
        <div class="right" :style="getBackground"></div>
    </div>
</template>
<script>
export default {
    name: 'crosshair',
    computed: {
        isAnimating () {
            return 'crosshair ' + (this.$store.state.hud.isReticleFired ? 'animate' : '');
        },
        getBackground () {
            const c = this.$store.state.hud.reticleColor;
            return `background: rgba(${c[0]}, ${c[1]}, ${c[2]}, ${c[3]})`;
        }
    }
}
</script>
<style lang="scss" scoped>
$box: 100px;
$short: 4px;
$long: $box/2 - 20px;
$sh: calc(50% - 2px);

.crosshair {
    position: relative;
    width: $box;
    height: $box;
    transition: width 0.125s, height 0.125s;

    .top {
        position: absolute;
        width: $short;
        height: $long;
        top: 0;
        left: $sh;
    }

    .bottom {
        position: absolute;
        width: $short;
        height: $long;
        left: $sh;
        bottom: 0;
    }

    .left {
        position: absolute;
        width: $long;
        height: $short;
        top: $sh;
        left: 0;
    }

    .right {
        position: absolute;
        width: $long;
        height: $short;
        top: $sh;
        right: 0;
    }

    &.animate {
        height: $box/1.5;
        width: $box/1.5;
    }
}
</style>
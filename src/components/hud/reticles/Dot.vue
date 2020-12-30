<template>
    <div class="dot" :class="isAnimating" :style="getBackground"></div>
</template>
<script>
export default {
    name: 'dot',
    computed: {
        isAnimating () {
            return this.$store.state.hud.isReticleFired ? 'animate' : '';
        },
        getBackground () {
            const c = this.$store.state.hud.reticleColor;
            return `border: 5px solid rgba(${c[0]}, ${c[1]}, ${c[2]}, ${c[3]})`;
        }
    }
}
</script>
<style lang="scss" scoped>
.dot {
    position: relative;
    width: 5px;
    height: 5px;
    background: transparent;
    border-radius: 50px;
    transition: width 0.125s, height 0.125s;

    &.animate {
        width: 50px;
        height: 50px;
    }
}
</style>
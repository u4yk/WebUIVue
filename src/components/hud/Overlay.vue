<template>
    <div class="overlay-main">
        <div class="overlay-content">
            <slot></slot>
        </div>
        <div class="overlay-underlay"></div>
    </div>
</template>
<style lang="scss" scoped>
.overlay-main {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
}

.overlay-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    border-radius: 25px;
    background: #fff;
    padding: 5%;
    z-index: 2;
    font-size: 3em;
}

.overlay-underlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    z-index: 1;
}
</style>
<script>
export default {
    name: 'overlay',
}
</script>
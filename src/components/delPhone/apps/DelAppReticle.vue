<template>
    <del-phone-app appname="reticle">
        <template v-slot:app-icon>
            <div class="icon">R</div>
        </template>
        <template v-slot:app-main>
            <div class="del-phone-app-reticle"></div>
        </template>
    </del-phone-app>
</template>
<script>
export default {
    name: 'del-app-reticle',
}
</script>
<style lang="scss" scoped>
    .icon {
        width: 100%;
        height: 100%;
        position: absolute;
        line-height: 50px;
        font-size: 32px;
        color: #fff;
        background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
        text-shadow: -1px -2px rgba(0,0,0,0.7);
    }
</style>
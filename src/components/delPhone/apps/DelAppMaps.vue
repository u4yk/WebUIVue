<template>
    <del-phone-app appname="maps">
        <template v-slot:app-icon><div class="icon">G</div></template>
        <template v-slot:app-main>
            <div class="del-phone-app-maps"></div>
        </template>
    </del-phone-app>
</template>
<script>
export default {
    name: 'del-app-maps',
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
        background-image: linear-gradient(to top, #a3bded 0%, #6991c7 100%);
        text-shadow: -2px -2px rgba(0,0,0,0.7);
    }
</style>
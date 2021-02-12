<template>
    <del-phone-app appname="reticle">
        <template v-slot:app-icon>
            <div class="icon"><md-icon class="fa fa-bullseye"></md-icon></div>
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
        line-height: 44px;
        color: #fff;
        background-image: linear-gradient(45deg, #43ffa1 0%, #ff835e 100%);
        text-shadow: -1px -2px rgba(0,0,0,0.7);

        .md-icon::before {
            color: #4b1c1c;
            font-size: 22px;
        }
    }
</style>
<template>
    <del-phone-app appname="maps">
        <template v-slot:app-icon><div class="icon"><md-icon class="fa fa-map-marked-alt"></md-icon></div></template>
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
        line-height: 46px;
        font-size: 32px;
        color: #fff;
        background-image: linear-gradient(to top, #c8dcff 0%, #021a3a 100%);
        text-shadow: -2px -2px rgba(0,0,0,0.7);

        .md-icon::before {
            color: #fcfcfc;
        }
    }
</style>
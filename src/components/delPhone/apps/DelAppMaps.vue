<template>
    <del-phone-app appname="maps">
        <template v-slot:app-icon><div class="icon"><md-icon class="fa fa-map"></md-icon></div></template>
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
        line-height: 42px;
        color: #fff;
        background-image: linear-gradient(45deg, #222d3f 0%, #237ff8 100%);
        text-shadow: -2px -2px rgba(0,0,0,0.7);

        .md-icon::before {
            color: #fcfcfc;
            font-size: 22px;
        }
    }
</style>
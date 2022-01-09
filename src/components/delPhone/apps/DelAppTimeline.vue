<template>
    <del-phone-app appname="timeline">
        <template v-slot:app-icon>
            <div class="icon"><md-icon class="fa fa-stream"></md-icon></div>
        </template>
        <template v-slot:app-main>
            <div class="del-phone-app-timeline"></div>
        </template>
    </del-phone-app>
</template>
<script>
export default {
    name: 'del-app-timeline'
}
</script>
<style lang="scss" scoped>
    .icon {
        width: 100%;
        height: 100%;
        position: absolute;
        line-height: 44px;
        color: #fff;
        background-image: linear-gradient(-140deg, #0c047a 0%, #ffb45e 70%, rgb(110, 63, 1) 71%, rgb(94, 0, 0) 100%);
        text-shadow: -1px -2px rgba(0,0,0,0.7);

        .md-icon::before {
            color: #ffffff;
            font-size: 22px;
        }
    }
</style>
<template>
    <del-phone-app appname="spotify">
        <template v-slot:app-icon>
            <div class="icon"><md-icon class="fa fa-compact-disc"></md-icon></div>
        </template>
        <template v-slot:app-main>
            <div class="del-phone-app-spotify">
                <iframe src="https://curve.bandcamp.com/"></iframe>
            </div>
        </template>
    </del-phone-app>
</template>
<script>
export default {
    name: 'del-app-spotify',
}
</script>
<style lang="scss" scoped>
    .icon {
        width: 100%;
        height: 100%;
        position: absolute;
        line-height: 42px;
        font-size: 32px;
        color: #fff;
        background-image: linear-gradient(45deg, #ffffff 0%, #071b31 50%, rgb(162, 204, 46) 75%, #000000 100%);
        text-shadow: -1px -2px rgba(0,0,0,0.7);

        .md-icon::before {
            color: #ffffff;
        }
    }
    iframe {
        width: 100%;
        height: 100% !important;
        top: 0;
        left: 0;
        position: absolute;
    }
</style>
<template>
    <del-phone-app appname="mail">
        <template v-slot:app-icon>
            <div class="icon"><md-icon class="fa fa-envelope"></md-icon></div>
        </template>
        <template v-slot:app-main>
            <div class="del-phone-app-mail"></div>
        </template>
    </del-phone-app>
</template>
<script>
export default {
    name: 'del-app-mail',
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
        background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
        text-shadow: -2px -2px rgba(0,0,0,0.7);

        .md-icon::before {
            color: #fffffe;
        }
    }
</style>
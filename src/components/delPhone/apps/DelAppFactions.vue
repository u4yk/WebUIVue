<template>
    <del-phone-app appname="factions">
        <template v-slot:app-icon>
            <div class="icon"><md-icon class="fa fa-users"></md-icon></div>
        </template>
        <template v-slot:app-main>
            <div class="del-phone-app-factions"></div>
        </template>
    </del-phone-app>
</template>
<script>
export default {
    name: 'del-app-factions',
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
        background-image: linear-gradient(45deg, #bdff43 0%, #3389eb 50%, #800e0e 75%, #1f000a 100%);
        text-shadow: -1px -2px rgba(0,0,0,0.7);

        .md-icon::before {
            color: #ffffff;
        }
    }
</style>
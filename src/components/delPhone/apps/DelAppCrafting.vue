<template>
    <del-phone-app appname="crafting">
        <template v-slot:app-icon>
            <div class="icon"><md-icon class="fas fa-tools"></md-icon></div>
        </template>
        <template v-slot:app-main>
            <div class="del-app-crafting"></div>
        </template>
    </del-phone-app>
</template>
<script>
export default {
    name: 'del-app-crafting',
}
</script>
<style lang="scss" scoped>
    .icon {
        width: 100%;
        height: 100%;
        position: absolute;
        line-height: 44px;
        color: #fff;
        background-image: linear-gradient(to bottom, #cb30d0 0%, #67080d 100%);
        text-shadow: -2px -2px rgba(0,0,0,0.7);

        .md-icon::before {
            color: #fffffe;
            font-size: 22px;
        }
    }
</style>
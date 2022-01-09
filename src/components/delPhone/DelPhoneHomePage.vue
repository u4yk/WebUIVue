<template>
    <div class="del-phone-home-page">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
    .del-phone-home-page {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        padding: 10% 5%;
        display: flex;
        flex: 1 1 100%;
    }
</style>
<script>
export default {
    name: 'del-phone-home-page'
}
</script>

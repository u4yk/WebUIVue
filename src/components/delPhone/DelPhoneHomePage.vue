<template>
    <div class="del-phone-page">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
    .del-phone-page {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        padding: 10% 5%;
    }
</style>
<script>
export default {
    name: 'del-phone-page'
}
</script>

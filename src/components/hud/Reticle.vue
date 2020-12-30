<template>
    <div class="reticle">
        <slot></slot>
    </div>
</template>
<style lang="scss" scoped>
.reticle {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>
<script>
export default{
    name: 'reticle',
    computed: {},
    data () {
        return {};
    },
    methods: {}
};
</script>
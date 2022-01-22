<template>
    <div class="life-meter">
        <div class="life-meter-container">
            <div class="life-meter-bar" :style="getEnergyWidth">
                <div class="life-meter-bar-inner"></div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
$maxWidth: 40vw;
$ht: 5vh;

.life-meter {
    position: fixed;
    width: $maxWidth;
    height: $ht;
    bottom: 2vh;
    left: 30vw;
    background: transparent;
    border: 0;
    border-radius: 4px;
    padding: 5px 5px;
}

.life-meter-container {
    width: $maxWidth;
    height: $ht;
    position: relative;
    float: left;
    border-radius: 4px;
    overflow: hidden;
    background: rgba($color: #000000, $alpha: 0.5);
}

.life-meter-bar {
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    overflow: hidden;
    border: 0;
    transition: width 0.5s;
}

.life-meter-bar-inner {
    position: absolute;
    width:$maxWidth;
    height: $ht;
    top: 0;
    left: 0;
    background: rgba($color: #fff, $alpha: 0.7);
}
</style>
<script>
export default{
    name: 'life-meter',
    props: ['barWidth'],
    computed: {
        getEnergyWidth () {
            const styleWidth = this.barWidth || 40;
            const maxHealth = this.$store.state.healthMax || 1; //default is 1 since divide by zero is a bad idea
            
            return `width: ${styleWidth * this.$store.state.health / maxHealth }vw`;
        }
    },
    data () {
        return {};
    },
    methods: {}
};
</script>
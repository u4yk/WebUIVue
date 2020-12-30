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
$maxWidth: 80vw;
$ht: 5vh;

.life-meter {
    position: fixed;
    width: $maxWidth;
    height: $ht;
    bottom: 2vh;
    left: 10vw;
    background: #fff;
    border: 2px solid #000;
    border-radius: 20px;
    padding: 10px 10px;
    box-shadow: inset 0vh 0vw 1.25vh 0.5vh rgba(0, 0, 0, 0.8);
    background: radial-gradient(circle at 50%, #333, #333 50%, #eee 75%, #333 75%);
}

.life-meter-container {
    width: $maxWidth;
    height: $ht;
    position: relative;
    float: left;
    border-radius: 15px;
    border: 2px solid #000;
    overflow: hidden;
    background: rgb(255, 255, 255);
    margin: -2px 0 0 -2px;
    box-shadow: inset -0.25vh 0.25vw 2vh 1vh rgba(0,0,0,0.8);
}

.life-meter-bar {
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: -2px;
    left: -2px;
    border-radius: 15px;
    overflow: hidden;
    border: 2px solid rgb(0, 0, 0);
    transition: width 0.5s;
}

.life-meter-bar-inner {
    position: absolute;
    width:$maxWidth;
    height: $ht;
    top: 0;
    left: 0;
    box-shadow: inset 0.5vh 0.5vw 2vh 0.125vh rgba(255, 255, 255, 0.8);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(115,10,10,1) 5%, rgba(163,0,0,1) 13%, rgba(204,205,3,1) 28%, rgba(29,181,0,1) 42%, rgba(3,20,210,1) 67%, rgba(145,2,244,1) 85%, rgb(157, 200, 255) 100%);
}
</style>
<script>
export default{
    name: 'life-meter',
    props: ['barWidth'],
    computed: {
        getEnergyWidth () {
            const styleWidth = this.barWidth || 80;
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
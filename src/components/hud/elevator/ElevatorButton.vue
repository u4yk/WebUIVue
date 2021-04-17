<template>
    <div class="elevator-button-holder">
        <button class="elevator-button" @click="clickButton">{{floor}}</button>
    </div>
</template>
<script>
export default {
    name: 'elevator-button',
    props: ['floor'],
    methods: {
        clickButton () {
            console.log(this.floor);
            ue.requests.getSelectedElevatorFloor({floor: this.floor});
        }
    }
}
</script>
<style lang="scss" scoped>
.elevator-button-holder {
    border: 5px solid rgba(0,0,0,1);
    border-radius: 100px;
    width: 8vw;
    height: 8vw;
    padding: 1vw;
    position: relative;
    float: left;
    margin: 1vw;
    background: radial-gradient(circle, rgb(146, 197, 255) 0%, rgb(3, 19, 71) 26%, rgb(7, 5, 32) 26%, rgba(255,255,255,1) 100%);
    box-shadow: inset 5px 5px 14px 14px rgba(0,0,0,0.82);
    padding: 0;
    cursor: pointer;
}
.elevator-button {
    border: 2px solid rgba(0,0,0,1);
    border-radius: 100px;
    width: 5vw;
    height: 5vw;
    position: absolute;
    top: calc(1.5vw - 4px);
    left: calc(1.5vw - 4px);
    margin: 0;
    font-size: 3vw;
    background: rgb(255, 255, 255);
    cursor: pointer;
}
</style>
<template>
    <div class="elevator-panel">
        <ElevatorButton v-for="(item,idx) in getFloors" :floor="idx + 1" :key="idx"></ElevatorButton>
    </div>
</template>
<script>
import ElevatorButton from './ElevatorButton.vue';
export default {
  components: { ElevatorButton },
    name: 'elevator-panel',
    components: {
        ElevatorButton
    },
    computed: {
        getFloors () {
            const a = [];
            const floorcount = this.$store.state.hud.elevatorFloors;
            for (let i=0; i<floorcount; ++i) {
                a.push({});
            }
            return a;
        }
    },
    
}
</script>
<style lang="scss" scoped>
.elevator-panel {
    width: 80vw;
    height: 80vh;
    position: fixed;
    top: 10vh;
    left: 10vw;
    padding: 5vh 5vw;
    background: rgba(0,0,0,0.5);
    border-radius: 25px;
}
</style>
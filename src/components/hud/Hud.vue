<template>
    <div class="hud">
        <div class="main-container" v-if="isMain">
            <compass></compass>
            <Reticle v-if="isReticleOn">
                <Crosshair v-if="isReticleCrosshair"></Crosshair>
                <Dot v-if="isReticleDot"></Dot>
            </Reticle>
            <Notification></Notification>
            <LifeMeter></LifeMeter>
            <Overlay v-if="isDead">You're dead!</Overlay>
        </div>
        <Dialogue v-if="isDialogue"></Dialogue>
        <ElevatorPanel v-if="isElevator"></ElevatorPanel>
        <Inventory v-if="isInventory"></Inventory>
        <DelPhone v-if="isDelPhoneOpen"></DelPhone>
    </div>
</template>
<style lang="scss" scoped>

</style>
<script>
import Compass from './Compass.vue';
import Crosshair from './reticles/Crosshair.vue';
import Dialogue from './Dialogue.vue';
import Dot from './reticles/Dot.vue';
import ElevatorPanel from './elevator/ElevatorPanel.vue';
import Inventory from './Inventory.vue';
import LifeMeter from './LifeMeter.vue';
import Overlay from './Overlay.vue';
import Reticle from './Reticle.vue';
import Notification from './Notification.vue';
import DelPhone from '../delPhone/DelPhone.vue';

export default {
    name: 'hud',
    components: {
        Compass,
        Crosshair,
        Dialogue,
        Dot,
        ElevatorPanel,
        Inventory,
        LifeMeter,
        Notification,
        Overlay,
        Reticle,
        DelPhone
    },
    computed: {
        isDead () {
            return this.$store.state.isDead;
        },
        isDialogue () {
            return this.$store.state.hud.displayState === 'dialogue';
        },
        isMain () {
            return this.$store.state.hud.displayState === 'main';
        },
        isInventory () {
            return this.$store.state.hud.displayState === 'inventory';
        },
        isReticleOn () {
            return this.$store.state.hud.isReticleOn;
        },
        isElevator () {
            return this.$store.state.hud.displayState === 'elevatorpanel';
        },
        isReticleCrosshair () {
            return this.$store.state.hud.reticleStyle === 'crosshair';
        },
        isReticleDot () {
            return this.$store.state.hud.reticleStyle === 'dot';
        },
        isDelPhoneOpen () {
            return this.$store.state.hud.displayState === 'del';
        }
    }
}
</script>
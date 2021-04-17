<template>
    <div class="compass-container">
        <div class="compass-parent" :style="getCompassRotation">
            <div class="strips">
                <div class="fas fa-caret-up"></div>
                <div class="north">N</div>
            </div>
                <div class="south"><p>S</p></div>
                <div class="west"><p>W</p></div>
                <div class="east"><p>E</p></div>
            <div class="center"></div>
            <div class="npc" v-for="(pos,i) in getNPCs" :key="i" :style="setNPCstyle(pos)"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'compass',
    computed: {
        /**
         * @method getCompassRotation
         * @description gets the current player rotation from the state and updates the compass accordingly.
         * @returns string
         */
        getCompassRotation () {
            //For those not using optional chaining yet...
            const rot = (this.$store.state.hud.playerXform || {rot: 0}).rot;
            //-1 calculates the rotation backwards so that the direction the player is facing is up top, and there's a 90 degree offset since due north is at 90 degrees
            const z = -1*(rot + 90);
            return `transform: rotate(${z}deg);`;
        },
        /**
         * @method getNPCs
         * @description gets all currently known NPCs within range, provided by UE4
         * @returns Array -- an array of NPC 3D vectors
         */
        getNPCs () {
            return this.$store.state.hud.perceivedNPCs;
        }
    },
    methods: {
        /**
         * @method setNPCstyle
         * @description updates the position of the NPC inside the compass
         * @param {Object}          pos
         * @param {Object.number}   pos.x
         * @param {Object.number}   pos.y
         * @returns string
         */
        setNPCstyle (pos) {
            const x = (2000 - pos.x)/250;
            const y = (2000 - pos.y)/250;
            return `transform: translate3d(calc(${x}vw - 5px), calc(${y}vw - 5px),0);`;
        }
    }
}
</script>
<style lang="scss" scoped>
$compassColor: rgb(43, 224, 19);
.compass-container {
    width: 8vw;
    height: 8vw;
    position: absolute;
    left: 1vw;
    top: 1vw;
    overflow: hidden;
    border: 2px solid $compassColor;
    border-radius: 100px;
    transform: rotate(0deg);
    overflow: hidden;
}

.compass-parent {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    border: 0;
    transform: rotate(0deg);
}

.strips {
    font-size: 1vw;
    line-height: 0.5vw;
    position: relative;

    &:before {
        position: absolute;
        top: 0;
        left: 50%;
        content: ''
    }
}
.north, .fas {
    color: $compassColor;
}
.south {
    color: $compassColor;
    position: absolute;
    transform: rotate(180deg);
    width: 8vw;
    height: 8vw;
    top: 0.5vw;
    left: 0;
    font-size: 1vw;

    p {
        transform: rotate(0deg);
    }
}
.east {
    color: $compassColor;
    position: absolute;
    transform: rotate(90deg);
    width: 8vw;
    height: 8vw;
    top: -0.25vw;
    left: 0.5vw;
    font-size: 1vw;
    p {
        transform: rotate(0deg);
    }
}
.west {
    color: $compassColor;
    position: absolute;
    transform: rotate(-90deg);
    width: 8vw;
    height: 8vw;
    top: -0.25vw;
    left: -0.75vw;
    font-size: 1vw;
    p {
        transform: rotate(0deg);
    }
}
.center, .npc {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: rgb(21, 12, 155);
    border: 2px solid #000;
    border-radius: 25px;
    top: calc(50% - 5px);
    left: calc(50% - 5px);
}

.npc {
    background-color: rgb(11, 194, 57);
    top: 0;
    left: 0;
    transform: translate3d(0,0,0);
}

</style>
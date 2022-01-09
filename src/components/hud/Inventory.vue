<template>
    <div class="inventory">
        <div class="inventory-type">
            <md-button @click="prevType" class="md-icon-button md-raised md-primary start">
                <md-icon class="fa fa-arrow-circle-left"></md-icon>
            </md-button>
            <h2>{{getType}}</h2>
            <md-button @click="nextType" class="md-icon-button md-raised md-primary end">
                <md-icon class="fa fa-arrow-circle-right"></md-icon>
            </md-button>
        </div>
        <div class="inventory-box-container">
            <inventory-box :items="getPlayerInventory" parentkey="player" otherkey="other"></inventory-box>
            <inventory-box :items="getOtherInventory" parentkey="other" otherkey="player"></inventory-box>
        </div>
        <div class="buttons">
            <md-button @click="transfer" class="md-raised md-primary">Close</md-button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.inventory {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: rgba(255,255,255,0.5);
    color: rgb(255, 255, 255);
}
.inventory-type {
    width: 100vw;
    display: flex;
    justify-content: center;
    padding: 5vh 1vw;

    .md-button {
        display: flex;

        &.start {
            display: flex;
            justify-self: flex-start;
            align-self: flex-start;
        }

        &.end {
            display: flex;
            justify-self: flex-start;
            align-self: flex-start;
        }
    }

    h2 {
        padding: 1vh 1vw;
        margin: 0;
        display: flex;
        width: 20vw;
        text-align: center;
        justify-content: center;
        font-size: 32px;
        font-weight: 100;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 15px;
    }
}
.inventory-box-container {
    display: flex;
    padding: 0;
    margin-bottom: 2vh;
}
.buttons {
    .md-button {
        border-radius: 15px;
        height: 4rem;
        min-width: 10rem;
        font-size: 1.25rem;
    }
}
</style>
<script>
import InventoryBox from './inventory/InventoryBox.vue';

export default{
    name: 'inventory',
    components: {
        InventoryBox
    },
    data () {
        return {
            type: 'All',
            typeList: [
                'All',
                'Melee Weapon',
                'Ranged Weapon',
                'Clothing',
                'Food',
                'Drink',
                'Ammo',
                'Notes',
                'Misc'
            ]
        }
    },
    computed: {
        getType () {
            return this.type === '' ? 'All' : this.type;
        },
        getPlayerInventory () {
            return this.$store.state.hud.inventory?.player?.filter(v => this.type === 'All' || v.type === this.type);
        },
        getOtherInventory () {
            return this.$store.state.hud.inventory?.other?.filter(v => this.type === 'All' || v.type === this.type);
        }
    },
    methods: {
        transfer () {
            ue.requests.inventoryTransfer(this.$store.state.hud.inventory);
        },
        nextType () {
            let typeIdx = this.typeList.indexOf(this.type);
            
            if (typeIdx >= this.typeList.length - 1 || typeIdx === -1) {
                typeIdx = 0;
            } else {
                ++typeIdx;
            }
            
            this.type = this.typeList[typeIdx];
        },
        prevType () {
            let typeIdx = this.typeList.indexOf(this.type);
            
            if (typeIdx <= 0) {
                typeIdx = this.typeList.length - 1;
            } else {
                --typeIdx;
            }

            this.type = this.typeList[typeIdx];
        }
    }

};
</script>
<template>
    <del-phone-app appname="inventory">
        <template v-slot:app-icon>
            <div class="icon"><md-icon class="fa fa-archive"></md-icon></div>
        </template>
        <template v-slot:app-main>
            <div class="del-phone-app-inventory">
                <md-toolbar class="inventory-type">
                    <md-button @click="prevType" class="md-icon-button md-primary start">
                        <md-icon class="fa fa-arrow-circle-left"></md-icon>
                    </md-button>
                    <h2>{{getType}}</h2>
                    <md-button @click="nextType" class="md-icon-button md-primary end">
                        <md-icon class="fa fa-arrow-circle-right"></md-icon>
                    </md-button>
                </md-toolbar>
                <md-content class="md-scrollbar">
                    <md-list class="parent" :md-expand-single="true">
                        <md-list-item v-for="(item, idx) in getPlayerInventory" :key="idx" md-expand class="inventory-item" :class="{equipped: item.isEquipped}">
                            <md-avatar class="md-avatar-icon md-primary">{{item.type.substr(0,1)}}</md-avatar>
                            <span class="md-list-item-text">{{item.name}}</span>
                            <md-list slot="md-expand">
                                <md-list-item class="md-inset in-use" :class="{hidden: !item.isEquipped}" :style="getInnerStyle">In Use</md-list-item>
                                <md-list-item class="md-inset" :style="getInnerStyle">Quantity: {{item.qty}}</md-list-item>
                                <md-list-item class="md-inset" v-if="isEquippable(item)" :style="getInnerStyle">Condition: {{item.cond/item.condMax*100}}%</md-list-item>
                                <md-list-item class="md-inset" v-if="item.desc.length > 0" :style="getInnerStyle">{{item.desc}}</md-list-item>
                                <md-list-item class="md-inset" v-if="isEquippable(item)" style="margin-left: -36px">
                                    <md-button class="md-primary md-raised" v-if="!item.isEquipped" @click="equip(item, false)">Equip</md-button>
                                    <md-button class="md-primary md-raised" v-if="item.isEquipped" @click="equip(item, true)">Unequip</md-button>
                                    <md-button class="md-primary md-raised" @click="repair(item)" v-if="canRepair(item)">Repair</md-button>
                                </md-list-item>
                                <md-list-item class="md-inset" v-if="isConsumable(item)" style="margin-left: -36px">
                                    <md-button class="md-primary md-raised" @click="equip(item)">Consume</md-button>
                                </md-list-item>
                            </md-list>
                        </md-list-item>
                    </md-list>
                </md-content>
            </div>
        </template>
    </del-phone-app>
</template>
<script>
import {cloneDeep} from 'lodash';

export default {

    name: 'del-app-inventory',
    data () {
        return {
            type: '',
            typeList: [
                '',
                'Melee Weapon',
                'Ranged Weapon',
                'Clothing',
                'Food',
                'Drink',
                'Ammo',
                'Component'
            ]
        }
    },
    computed: {
         getType () {
            return this.type === '' ? 'All' : this.type;
        },
        getPlayerInventory () {
            return this.$store.state.hud.inventory.player?.filter(v => this.type === '' || v.type === this.type);
        },
        getInnerStyle () {
            return `margin-top: -16px; margin-left: -36px;`;
        },
    },
    methods: {
        canRepair (item) {
            return item.cond/item.condMax < 0.9999;
        },
        repair (item) {
            ue.requests.repairItem(item);
        },
        isEquippable (item) {
            return item.type.indexOf('Weapon') !== -1 || item.type === 'Clothing';
        },
        isConsumable (item) {
            return item.type === 'Food' || item.type === 'Drink';
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
        },

        getNext (store, item, current, equipped, type) {
            let i = -1;
            
            if (current !== -1 && equipped && equipped[0]) {
                store.player[current] = equipped[0];
            }

            return {
                nextItem: store.player.filter((v, idx) => {
                    const thisIsIt = v.cname === item.cname && v.type.indexOf(type) !== -1;

                    if (thisIsIt) {
                        i = idx;
                        v.isEquipped = true;
                    } else {
                        store.player[idx].isEquipped = false;
                    }

                    return thisIsIt;
                })[0],
                nextPos: i
            }
        },
        getPrev (store, item, type) {
            let current = -1;

            return {
                equipped: store.player.filter((v,idx) => {
                    const thisIsIt = v.isEquipped && v.type.indexOf(type) !== -1;

                    if (thisIsIt) {
                        current = idx;
                    }

                    return thisIsIt;
                }),
                current: current
            }
        },
        equipItem (item, type, unequip) {
            const store = cloneDeep(this.$store.state.hud.inventory);

            let {equipped, current} = this.getPrev(store, item, type);
            let {nextItem, nextPos} = this.getNext(store, item, current, equipped, type);
            
            if (unequip) {
                store.player[nextPos].isEquipped = false;
                nextItem = cloneDeep(nextItem);
                nextItem.cname = '';
            } else {
                store.player[nextPos] = nextItem;
            }

            ue.requests.equipItem(nextItem);
            this.$store.commit('hud/updateInventory', store);
        },
        equip (item, unequip) {
            if (item.type.indexOf('Weapon') !== -1) {
                this.equipItem(item, 'Weapon', unequip);
            } else if (item.type === 'Clothing') {
                this.equipItem(item, 'Clothing', unequip);
            } 
        }
    }
}
</script>
<style lang="scss" scoped>
    .icon {
        width: 100%;
        height: 100%;
        position: absolute;
        line-height: 40px;
        color: #fff;
        background-image: linear-gradient(to top, #121f1f 0%, #d400ff 100%);
        text-shadow: -2px -2px rgba(0,0,0,0.7);

        .md-icon::before {
            color: #b5d8ff;
            font-size: 20px;
        }
    }
    .hidden {
        visibility: hidden;
    }
    .inventory-item {
        border: 2px solid transparent;
    
        &.equipped {
            border: 2px solid var(--md-theme-default-primary, #448aff);
        }
    }
    .md-list.md-theme-default .md-list-item.in-use .md-list-item-container  {
        color: var(--md-theme-default-accent, #ff5252);
        font-weight: 700;
    }

    .md-content {
        overflow-x: hidden;
        height: 56vh;
    }
    .md-list {
        flex-basis: 100%;
    }
    .md-list-item.md-inset .md-list-item-content {
        padding: 0 !important;
        min-height: 24px;

        .md-button {
            margin-left: 0;
        }
    }
    .inventory-type {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 5%;

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
            padding: 1%;
            margin: 0;
            display: flex;
            width: 60%;
            text-align: center;
            justify-content: center;
        }
    }
</style>
<template>
    <div class="inventory-box">
        <div class="inventory-box-container">
            <div class="inventory-box-item" v-for="(i, idx) in items" :key="idx" :class="{expanded: isExpanded(idx)}">
                <md-toolbar class="inventory-box-item-toolbox">
                    <div class="left">
                    <h3 class="md-title">{{i.name}}</h3>
                    </div>
                    <div class="right">
                        <h3 class="md-title">{{i.qty}}</h3>
                        <md-button class="md-icon-button md-raised md-primary" @click="inc(idx)">
                            <md-icon class="fa fa-plus"></md-icon>
                        </md-button>
                        <md-button class="md-icon-button md-raised md-accent" @click="dec(idx)">
                            <md-icon class="fa fa-minus"></md-icon>
                        </md-button>
                        <md-button class="md-icon-button md-raised" @click="expand(idx)">
                            <md-icon class="fa" :class="{'fa-grip-lines': !isExpanded(idx), 'fa-grip-lines-vertical': isExpanded(idx)}"></md-icon>
                        </md-button>
                    </div>
                </md-toolbar>
                <md-content class="inventory-box-item-content" v-show="isExpanded(idx)">
                    <div class="description left md-primary">{{i.desc}}</div>
                    <div class="value right md-primary">&#164;{{i.value}}</div>
                </md-content>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.inventory-box {
    width: 40vw;
    height: 70vh;
    border: 0.25rem solid var(--md-theme-default-primary, #448aff);
    border-radius: 25px;
    margin: 0 5vw;
    display: flex;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.5);
}
.inventory-box-container {
    width: 100%;
    height: 100%;
    overflow: hidden auto;
    display: flex;
    flex: 1 0 40vw;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-content: stretch;
}
.inventory-box-item {
    display: flex;
    width: 100%;
    flex: 0 0 5em;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-content: flex-start;
    height: 1.25em;
    align-self: start;
    
    &.expanded {
        flex: 0 0 10em;
    }
}
.inventory-box-item-toolbox {
    display: flex;
    width: 100%;
    height: 1.25rem;
    flex: 0 0 1.25em;
    
    &.md-toolbar{
        background: rgba(228, 222, 222, 0.25);
        .md-title{
            color: rgb(255, 255, 255);
        }
    }
}

.inventory-box-item-content {
    display: flex;
    width: 100%;
    height: 1.5rem;
    flex: 1 0 1.5rem;
    padding: 1rem 2rem;

    &.md-content {
        background: rgba(255,255,255,0.25);
    }
}

.left {
    width: 50%;
    display: flex;
    flex: 1 1 50%;

    &.description {
        font-weight: 400;
        font-size: 1rem;
    }
}

.right {
    width: 50%;
    display: flex;
    flex: 1 1 50%;
    justify-content: flex-end;

    h3 {
        line-height: 2em;
    }

    &.value {
        font-weight: 200;
        font-size: 3.5rem;
        line-height: 3.125rem;
        color: rgb(255, 255, 255);
    }
}
</style>
<script>
/**
 * name,
 * type,
 * cond,
 * condMax,
 * value,
 * valueMax,
 * desc
 */
import {cloneDeep} from 'lodash';
export default {
    name: 'inventory-box',
    props: ['items', 'parentkey', 'otherkey'],
    data () {
        return {
            expandedList: {},
        }
    },
    methods: {
        c (idx) {
            const store = cloneDeep(this.$store.state.hud.inventory);
            const me = store[this.parentkey];
            const other = store[this.otherkey];
            let index = -1;
            const oFilter = other.filter((v,i) => {
                if (v.name === me[idx].name && v.cond === me[idx].cond) {
                    index = i;
                    return true;
                }
                return false;
            });

            return [store, me, other, oFilter, index];
        },
        inc (idx) {
            const [store, me, other, oFilter, index] = this.c(idx);

            if (index !== -1 ) {
                --other[index].qty;
                ++me[idx].qty;

                if (other[index].qty === 0) {
                    other.splice(index,1)
                }
            }

            this.$store.commit('hud/showRemoteInventory', store);
        },
        dec (idx) {
            const [store, me, other, oFilter, index] = this.c(idx);           
            
            if (index !== -1) {
                ++other[index].qty;
            } else {
                other.push({
                    ...me[idx],
                    qty: 1
                })
            }

            --me[idx].qty;
            if (me[idx].qty === 0) {
                me.splice(idx, 1);
            }
            this.$store.commit('hud/showRemoteInventory', store);
        },
        isExpanded (idx) {
            return this.expandedList[idx];
        },
        expand (idx) {
            this.expandedList[idx] = !this.expandedList[idx];
            this.$forceUpdate();
        }
    }
}
</script>
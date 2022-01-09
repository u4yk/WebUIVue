<template>
    <div class="del-phone">
        <div class="del-phone-parent">
            <div class="del-phone-underlay"></div>
            <div class="del-phone-wrapper">
                <div class="del-phone-logo"></div>
            </div>
            <div class="del-phone-container">
                <div class="del-phone-home">
                    <component v-for="(item, i) in getApps" :is="item" :key="i" />
                </div>
            </div>
            <button class="del-phone-button" @click="goHome"></button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.del-phone {
    position: fixed;
    width: 25vw;
    height: 80vh;
    top: 10vh;
    right: 5vw;
    border-radius: 20px;
    overflow: hidden;
}
.del-phone-parent {
    width: 100%;
    height: 100%;
    float: left;
    position: relative;
    background: rgb(49, 48, 48);
}

.del-phone-underlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(199deg, rgba(0,0,0,1) 0%, rgb(90, 90, 90) 27%, rgba(24,24,24,1) 29%, rgb(77, 77, 77) 100%);
    opacity: 1;
    box-shadow: inset 5px -5px 10px 6px #000000;
    border-radius: 25px;
}

.del-phone-button {
    width: 12vw;
    height: 7vh;
    z-index: 3;
    position: absolute;
    bottom: 2vh;
    left: calc(50% - 6vw);
    border-radius: 100px;
    background: #858585;
    outline: none;
    box-shadow: inset -5px -5px 16px 1px black;
    border: 1px solid #858585;

    &:active {
        box-shadow: inset 1px 2px 9px 5px black;
    }
}

.del-phone-container {
    background: #fff;
    width: 80%;
    height: 80%;
    float: left;
    margin: 10%;
    border-radius: 15px;
    overflow: hidden;
    border: 2px solid #000;
    z-index: 10;
    position: relative;
}
.del-phone-home {
    position: relative;
    margin: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient( 135deg, #F97794 10%, #623AA2 100%);
    padding: 5%;
    display: flex;
    flex: 1 1 90%;
    flex-flow: wrap;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
}
</style>
<script>
import DelPhoneHomePage from './DelPhoneHomePage.vue';

export default {
    name: 'del-phone',
    components: {
        DelPhoneHomePage,
    },
    data () {
        return {
            maxItemsPerPage: 16,
            currentPage: 0,
            isArrowDown: false,
        }
    },
    computed: {
        getPages () {
            const pages = [];
        },
        getPageCount () {
            return Object.keys(this.$slots).length;
        },
        isAppOpen () {
            return this.$store.state.del.currentApp !== '';
        },
        getApps () {
            return this.$store.state.del.appList;
        }

    },
    methods: {
        getSlot (i) {
            return i === this.currentPage;
        },
        goHome () {
            this.$store.commit('del/setCurrentApp', '');
        }
    },
}
</script>
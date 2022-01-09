<template>
    <del-phone-app appname="health">
        <template v-slot:app-icon>
            <div class="icon"><md-icon class="fa fa-briefcase-medical"></md-icon></div>
        </template>
        <template v-slot:app-main>
            <div class="del-phone-app-health">
                <h1 class="head">Health Check</h1>
                <div class="content">
                    <h2 class="subhead">Health</h2>
                    <div class="health-item">
                        <span class="inline-icon"><md-icon class="fa fa-first-aid"></md-icon></span>
                        <span class="left">Health</span>
                        <span class="right">{{health}}</span>
                    </div>
                    <div class="health-item">
                        <span class="inline-icon"><md-icon class="fa fa-laptop-medical"></md-icon></span>
                        <span class="left">Health Max</span>
                        <span class="right">{{healthMax}}</span>
                    </div>
                    <h2 class="subhead">LASERS</h2>
                    <div class="health-item">
                        <span class="inline-icon"><md-icon class="fa fa-bible"></md-icon></span>
                        <span class="left">Luck</span>
                        <span class="right">{{luck}}</span>
                    </div>
                    <div class="health-item">
                        <span class="inline-icon"><md-icon class="fa fa-camera"></md-icon></span>
                        <span class="left">Allure</span>
                        <span class="right">{{allure}}</span>
                    </div>
                    <div class="health-item">
                        <span class="inline-icon"><md-icon class="fa fa-running"></md-icon></span>
                        <span class="left">Speed</span>
                        <span class="right">{{speed}}</span>
                    </div>
                    <div class="health-item">
                        <span class="inline-icon"><md-icon class="fa fa-heartbeat"></md-icon></span>
                        <span class="left">Endurance</span>
                        <span class="right">{{endurance}}</span>
                    </div>
                    <div class="health-item">
                        <span class="inline-icon"><md-icon class="fa fa-brain"></md-icon></span>
                        <span class="left">Reason</span>
                        <span class="right">{{reason}}</span>
                    </div>
                    <div class="health-item">
                        <span class="inline-icon"><md-icon class="fa fa-fist-raised"></md-icon></span>
                        <span class="left">Strength</span>
                        <span class="right">{{strength}}</span>
                    </div>
                </div>
            </div>
        </template>
    </del-phone-app>
</template>
<script>
export default {
    name: 'del-app-health',
    computed: {
        health () {
            return this.$store.state.health;
        },
        healthMax () {
            return this.$store.state.healthMax;
        },
        luck () {
            return this.$store.state.userStats.luck;
        },
        allure () {
            return this.$store.state.userStats.allure;
        },
        speed () {
            return this.$store.state.userStats.speed;
        },
        endurance () {
            return this.$store.state.userStats.endurance;
        },
        reason () {
            return this.$store.state.userStats.reason;
        },
        strength () {
            return this.$store.state.userStats.strength;
        },
    }
}
</script>
<style lang="scss" scoped>
    .icon {
        width: 100%;
        height: 100%;
        position: absolute;
        line-height: 44px;
        color: #fff;
        background-image: linear-gradient(30deg, #1394df 0%, #20394e 50%, #0c161b 51%, #b0d9fa 100%);
        text-shadow: -1px -2px rgba(0,0,0,0.7);

        .md-icon::before {
            color: #f5b8b8;
            font-size: 22px;
            line-height: 20px;
        }
    }
    .del-phone-app-health {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    h1 {
        color: #fff;
        background: #ff0000;
        margin: 0;
        -webkit-margin-before: 0;
        -webkit-margin-after: 0;
        padding: 1em;
    }
    .content {
        height: calc(100% - 3em);
        overflow-x: hidden;
        overflow-y: auto;
    }
    .health-item, h2 {
        width: 100%;
        float: left;
        padding: 0.25em 1em;
    }
    .inline-icon {
        float: left;
        .md-icon {
            color: #0183ce;
            font-size: 1.25em !important;
            line-height: 1.25em !important;
        }
    }
    .left {
        float: left;
        padding-left: 1em;
        font-size: 1.25rem;
        color: #012438;
    }
    .right {
        float: right;
        font-size: 1.25rem;
        color: #012438;
    }
</style>
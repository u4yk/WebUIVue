<template>
    <del-phone-app appname="quests">
        <template v-slot:app-icon>
            <div class="icon"><md-icon class="fa fa-map-marker-alt"></md-icon></div>
        </template>
        <template v-slot:app-main>
            <div class=" del-phone-app-quests">
                <md-toolbar><h3>Quests</h3></md-toolbar>
                <md-content class="md-scrollbar">
                    <md-list class="parent" :md-expand-single="true">
                        <md-list-item v-for="quest in quests" :key="quest.id" md-expand class="quest-item" :class="{current: id === current}">
                            <span class="md-list-item-text"><b>{{quest.title}}</b></span>
                                <md-list slot="md-expand">
                                    <md-list-item class="md-inset" :style="getInnerStyle"><h3><b>{{quest.slugline}}</b></h3></md-list-item>
                                    <md-list-item class="md-inset" :style="getInnerStyle">{{quest.description}}</md-list-item>
                                </md-list>
                        </md-list-item>
                    </md-list>
                </md-content>
            </div>
        </template>
    </del-phone-app>
</template>
<script>
export default {
    name: 'del-app-quests',
    computed: {
        quests: {
            get () {
                return this.$store.state.del.quests.allQuests;
            }
        },
        current: {
            get () {
                return this.$store.state.del.quests.current?.id;
            }
        },
        getInnerStyle () {
            return `margin-top: -16px; margin-left: -36px;`;
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
        background-image: linear-gradient(-140deg, #0c047a 0%, #ffb45e 70%, rgb(110, 63, 1) 71%, rgb(94, 0, 0) 100%);
        text-shadow: -1px -2px rgba(0,0,0,0.7);

        .md-icon::before {
            color: #ffffff;
            font-size: 22px;
        }
    }
</style>
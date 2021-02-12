<template>
    <div class="dialogue">
        <div class="dialogue-text" v-if="!isShowingResponses" @click="showResponses()">
                <div class="md-title md-primary">{{getName}}</div>
                <div class="md-content">{{getText}}</div>
        </div>
        <md-list class="dialogue-responses" v-if="isShowingResponses">
            <md-list-item v-for="(item, idx) in getResponses" :key="idx" @click="getResponse(item.id, item.next)">{{item.text}}</md-list-item>
        </md-list>
    </div>
</template>
<style lang="scss" scoped>
.dialogue {
    position: fixed;
    background: rgba(53, 53, 53, 0.125);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    border-radius: 15px;
}

.dialogue-text {
    position: absolute;
    bottom: 5vh;
    height: 35vh;
    width: 60vw;
    left: 20vw;
    border-radius: 15px;
    border: 5px solid #000;
    overflow: hidden;
    padding: 0;
    cursor: pointer;

    .md-title {
        background-clip: border-box;
        margin: 0;
        width: 100%;
        text-align: left;
        background: #2088dd;
        color: #bbefff;
        padding: 0 3rem;
        float: left;
        font-size: 2.5rem;
        height: 3.5rem;
        line-height: 3.5rem;
        font-weight: bolder;
    }

    .md-content {
        color: #2088dd;
        background: #bbefff;
        height: 100%;
        width: 100%;
        padding: 1rem;
        margin: 0;
        float: left;
        text-align: left;
        font-size: 1.25rem;
        font-weight: 100;
    }
}
</style>
<script>
export default{
    name: 'dialogue',
    computed: {
        getText () {
            return this.$store.state.hud.dialogue.text
        },
        getName () {
            return this.$store.state.hud.dialogue.name
        },
        getResponses () {
            return this.$store.state.hud.dialogue.responses;
        }
    },
    data () {
        return {
            isShowingResponses: false
        };
    },
    methods: {
        showResponses () {
            console.log('show responses')
            this.isShowingResponses = true;
            if (this.$store.state.hud.dialogue.responses.length === 0) {
                this.$store.commit('hud/setDisplayState', 'main');
                ue.requests.getDialogueOption({next:''});
            }
        },
        getResponse (id, next) {
            this.isShowingResponses = false;
            ue.requests.getDialogueOption({
                id: id,
                next: next
            });
        }
    }
};
</script>
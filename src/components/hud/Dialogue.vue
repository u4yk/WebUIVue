<template>
    <div class="dialogue">
        <div class="dialogue-text" v-if="!isShowingResponses" @click="showResponses">
            <div class="title primary">{{getName}}</div>
            <div class="content" >{{getText}}</div>
        </div>
        <div class="dialogue-text" v-if="isShowingResponses">
            <div class="title primary">{{getName}}</div>
            <div class="content responses" v-if="hasResponses">
                <ul class="dialogue-responses">
                    <li v-for="(item, idx) in getResponses" :key="idx" @click="getResponse(item.id, item.next)">{{item.text}}</li>
                </ul>
            </div>
            <div class="content" v-if="!hasResponses" @click="showResponses">{{getText}}</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.dialogue {
    position: fixed;
    background: rgba(5, 8, 14, 0.125);
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
    border: 5px solid #05080e;
    overflow: hidden;
    padding: 0;
    cursor: pointer;

    .title {
        background-clip: border-box;
        margin: 0;
        width: 100%;
        text-align: left;
        background: #05080e;
        color: #e7eaec;
        padding: 0 3rem;
        float: left;
        font-size: 2.5rem;
        height: 3.5rem;
        line-height: 3.5rem;
        font-weight: bolder;
        user-select: none;
    }

    .content {
        color: #05080e;
        background: #e7eaec;
        height: calc(35vh - 3.5rem);
        width: 100%;
        padding: 2rem 2.5rem;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: 500;
        user-select: none;
        text-align: left;
        float: left;
        &.responses {
            padding: 0 1rem;
        }
    }
}
.dialogue-responses {
    width: 100%;
    padding: 0;
    text-align: left;
    float: left;

    li {
        display: flex;
        flex: 1 0 100%;
        list-style: none;
        align-self:flex-start;
        margin: 0;
        height: 2em;
        line-height: 2em;
        padding: 0 1rem;
        width: 100%;
        &:hover {
            background: #05080e;
            color: #e7eaec;
        }
    }
}
</style>
<script>
export default{
    name: 'dialogue',
    computed: {
        /**
         * @method getText
         * @description gets the current NPC dialogue
         * @returns {string}
         */
        getText () {
            return this.$store.state.hud.dialogue.text
        },
        /**
         * @method getName
         * @description gets the name of the current NPC
         * @returns {string}
         */
        getName () {
            return this.$store.state.hud.dialogue.name
        },
        /**
         * @method getResponses
         * @description get the possible player responses for the current NPC dialogue
         * @returns {Array}
         */
        getResponses () {
            return this.$store.state.hud.dialogue.responses;
        },
        hasResponses () {
            return this.$store.state.hud.dialogue.responses.length > 0;
        }
    },
    data () {
        return {
            isShowingResponses: false
        };
    },
    methods: {
        /**
         * @method showResponses
         * @description tells the UI to display the responses the PC can choose from.  Exit back to main if there is no dialogue
         * @callback
         */
        showResponses () {
            this.isShowingResponses = true;
            if (this.$store.state.hud.dialogue.responses.length === 0) {
                this.$store.commit('hud/setDisplayState', 'main');
                ue.requests.getDialogueOption({next:''});
            }
        },
        /**
         * @method getResponse
         * @description tell UE4 what dialogue response the PC chose
         * @param {string} id       current response ID the PC chose
         * @param {string} next     ID of the next piece of NPC dialogue 
         * @callback
         */
        getResponse (id, next) {
            this.isShowingResponses = false;
            ue.requests.getDialogueOption({
                id: id,
                next: next
            });
        }
    },
};
</script>
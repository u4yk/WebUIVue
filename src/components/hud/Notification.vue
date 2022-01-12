<template>
    <div class="notifications">
        <transition-group 
                name="messages" 
                tag="div"
                enter-class="message-enter-active"
                leave-active-class="message-leave-active"
                :duration="{enter: 1000, leave: 1000}"
                @after-enter="enter">
            <div class="message" v-for="msg in messages" :key="msg.id" :data-index="msg.id">
                <h3 class="message-parent submessage">{{msg.parent}}</h3>
                <h4 class="message-name submessage">{{msg.name}}</h4>
                <h6 class="message-description submessage">{{msg.description}}</h6>
            </div>
        </transition-group>
    </div>
</template>
<script>

export default {
    name: 'notification',
    computed: {
        messages: {
            get () {
                return this.$store.state.hud.notifications
            }
        }
    },
    data () {
        return {
            fadeComplete: 5000
        }
    },
    methods: {
        enter (el) {
            setTimeout(() => {
                this.$store.commit('hud/removeNotification', el.dataset.index);
            }, this.fadeComplete);
        }
    }
}
</script>
<style lang="scss" scoped>
.notifications {
    width: 20vw;
    position: fixed;
    top: 1vw;
    right: 5vw;
}
.message {
    color: #fff;
    background: rgba(0,0,0,0.5);
    text-align: left;
    border-radius: 25px;
    margin-bottom: 2vw;
    padding: 0.25vw 1vw;
    opacity: 1;
    transform: scale3d(1,1,1);
    transition: opacity 1s ease, transform .5s ease;
}

.message-enter-active, .message-leave-active {
    opacity: 0;
    transform: scale3d(1,0,1);
}

.submessage {
    padding: 0;
    margin: 0.25rem 0;
}
</style>
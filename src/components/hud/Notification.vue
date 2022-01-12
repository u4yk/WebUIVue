<template>
    <div class="notifications">
        <transition-group 
                name="messages" 
                tag="div"
                @after-enter="enter">
            <div class="message" v-for="(msg, idx) in messages" :key="msg.name" :data-index="idx">
                <h3 class="message-parent submessage">{{msg.parent}}</h3>
                <h4 class="message-name submessage">{{msg.name}}</h4>
                <h6 class="message-description submessage">{{msg.description}}</h6>
            </div>
        </transition-group>
    </div>
</template>
<script>
import {cloneDeep} from 'lodash';
import Velocity from 'velocity-animate';

export default {
    name: 'notification',
    computed: {
        messages: {
            get () {
                return this.$store.state.hud.notifications
            },
            // set (notifications) {
                // this.$store.commit('hud/setNotifications', notifications);
            // }
        }
    },
    data () {
        return {
            fadeStart: 1000,
            fadeComplete: 5000,
            fadeEnd: 1000
        }
    },
    beforeEnter (el) {
        el.style.opacity = 0;
        el.style.height = 0;
    },
    methods: {
        enter (el) {
            setTimeout(() => {
                // console.log(this.$store.state.hud);
                const messages = cloneDeep(this.$store.state.hud.notifications).splice(el.dataset.index, 1);
                this.$store.commit('hud/setNotifications', messages);
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
    transition: opacity 0.5s ease, height 0.25s ease;
}

.message-enter-active, .message-leave-active {
    opacity: 1;
    height: 4em;
}

.message-enter {
    opacity: 0;
    height: 0;
}

.submessage {
    padding: 0;
    margin: 0.25rem 0;
}
</style>
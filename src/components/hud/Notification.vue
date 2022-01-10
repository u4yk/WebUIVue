<template>
    <div class="notifications">
        <transition-group 
                name="messages" 
                tag="div"
                :css="false"
                :before-enter="beforeEnter"
                :enter="enter"
                :leave="leave">
            <div class="message" v-for="(msg, idx) in messages" :key="msg.name" :data-index="idx">
                <h2 class="message-parent">{{msg.parent}}</h2>
                <h3 class="message-name">{{msg.name}}</h3>
                <h4 class="message-description">{{msg.description}}</h4>            
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
            set (notifications) {
                this.$store.commit('hud/setNotifications', notifications);
            }
        }
    },
    data () {
        return {
            fadeStart: 1000,
            fadeComplete: 15000,
            fadeEnd: 1000
        }
    },
    beforeEnter (el) {
        el.style.opacity = 0;
        el.style.height = 0;
    },
    methods: {
        beforeEnter (el) {
            el.style.opacity = 0;
            el.style.height = 0;
        },
        enter (el, done) {
            setTimeout(() => {
                Velocity(
                    el,
                    { opacity: 1, height: '4em'},
                    { complete: done}
                );
                setTimeout( () => {
                    this.messages = cloneDeep(this.$store.state.hud.notifications).splice(el.dataset.index, 1);
                }, this.fadeComplete);
            }, this.fadeStart);
        },
        leave (el, done) {
                setTimeout(() => {
                    Velocity(
                        el,
                        { opacity: 0, height: 0},
                        { complete: done}
                    )
                }, this.fadeEnd);
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
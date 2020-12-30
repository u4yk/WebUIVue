<template>
    <div class="del-phone-app">
        <div class="del-phone-app-icon" @click="clickIcon" v-show="isHome">
            <div class="del-phone-app-icon-icon"><slot name="app-icon"></slot></div>
            <div class="del-phone-app-icon-label">{{uc(appname)}}</div>
        </div>
        <div class="del-phone-app-main" v-show="isActiveApp">
            <slot name="app-main"></slot>
        </div>
    </div>
</template>
<style scoped lang="scss">
.del-phone-app {
    float: left;
    position: static;
    user-select: none;
}
.del-phone-app-icon { 
    width: 70px;
    height: 80px;
    position: relative;
    float: left;
    margin: 0 10px 10px 0;
    cursor: pointer;
}
.del-phone-app-icon-icon {
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 10px;
    position: relative;
    top: 0;
    left: 10px;
    overflow: hidden;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
}
.del-phone-app-icon-label {
    width: 70px;
    position: absolute;
    height: 1em;
    bottom: 0;
    left: 0;
}

.del-phone-app-main {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
}
</style>
<script>
export default {
  name: 'DelPhoneApp',
  props: ['appname'],
  computed: {
      isActiveApp () {
          return this.$store.state.del.currentApp === this.appname;
      },
      isHome () {
          return this.$store.state.del.currentApp === '';
      }
  },
  methods: {
      clickIcon () {
          this.$store.commit('del/setCurrentApp', this.appname);
      },
      uc (name) {
          return name.charAt(0).toUpperCase() + name.slice(1);
      }
  }
};
</script>

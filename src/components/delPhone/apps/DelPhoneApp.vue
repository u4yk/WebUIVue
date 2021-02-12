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
    width: 75px;
    height: 70px;
    position: relative;
    float: left;
    margin: 0 10px 20px 0;
    cursor: pointer;
}
.del-phone-app-icon-icon {
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 10px;
    position: relative;
    top: 0;
    left: 12px;
    overflow: hidden;
    border: 2px solid #fff;
    box-shadow: 3px 2px 1px 1px rgba(0,0,0,1);
}
.del-phone-app-icon-label {
    width: 100%;
    position: absolute;
    height: 1.25em;
    bottom: 0;
    left: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
    color: #fff;
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
          return (name.charAt(0).toUpperCase() + name.slice(1)).split('-').join(' ');
      }
  }
};
</script>

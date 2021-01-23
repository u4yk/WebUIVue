<template>
  <div id="app">
    <MenuTop v-if="isMenu"></MenuTop>
    <Hud v-if="isHud"></Hud>
  </div>
</template>

<script>
import MenuTop from './components/menu/MenuTop.vue';
import Hud from './components/hud/Hud.vue';

export default {
  name: 'App',
  components: {
    MenuTop,
    Hud
  },
  computed: {
    isMenu () { return this.$store.state.currentSection === 'menu'},
    isHud () { return this.$store.state.currentSection === 'hud'}
  }
}
</script>

<style lang="scss" scoped>

#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  background-color: transparent;
}
</style>

<template>
  <div id="app">
    <input ref="inputEl" type="text" />
    <keyboard :input="!!$refs.inputEl ? $refs.inputEl : null"/>
  </div>
</template>

<script>
import Keyboard from './components/softKeyboard.vue';

export default {
  name: 'App',
  components: {
    Keyboard,
  },
};
</script>

<style lang="stylus">
html,body
  height 100%
  margin 0
#app
  height 100%
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>

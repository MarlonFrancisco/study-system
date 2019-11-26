<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Login from './screens/Login/Login.vue';

@Component({
  components: {
    Login,
  },
})
export default class App extends Vue {
  private name = 'Marlon';
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  
  html, body, #app {
    width: 100vw;
    height: 100vh;
  }

  div::-webkit-scrollbar {
    width: 7px;
    background: rgba(173, 179, 208, 0.25);
}
  div::-webkit-scrollbar-thumb {
    background: teal;
  }
</style>
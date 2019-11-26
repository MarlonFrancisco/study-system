<template>
  <div class="fill-height">
    <Header></Header>

    <v-content class="fill-height">
      <v-container class="fill-height">
        <v-row justify="center">
          <v-col sm="12" md="3" align="center" v-for="(serie, index) of series" :key="index">
            <router-link style="text-decoration: none;" :to="`/study-system-with-vue/materias?ensino=${ensino}&ano=${serie}`">
              <v-btn
                fab
                dark
                width="100"
                height="100"
                :color="colors[index]"
                title="Voltar as liçoes"
                @click="cancel()"
              >{{ serie }} {{ ensino === "fundamental" ? 'série' : 'ano'}}</v-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './../shared/Header/Header.vue';

@Component({
  components: {
    Header,
  },
})
export default class Ano extends Vue {
  private series: number[] = [];
  private ensino = '';
  private colors = ['purple', 'cyan', 'teal', 'indigo'];

  public created() {
    const ensino = this.$router.currentRoute.query.ensino;

    this.ensino = ensino as string;

    if (ensino === 'fundamental') {
      this.series = [5, 6, 7, 8];
    } else {
      this.series = [1, 2, 3];
    }
  }
}
</script>

<style>
</style>
<template>
  <div>
    <Header></Header>

    <v-content>
        <v-container>
            <v-row>
                <v-col>
                    <v-list>
                        
                    </v-list>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Header from '../shared/Header/Header.vue';

@Component({
  components: {
    Header,
  },
})
export default class Lessons extends Vue {
  private matter: string;
  private ensino: string;

  constructor() {
    super();
    const queryString = window.location.search;
    this.matter = this.$router.currentRoute.query.matter as string;
    this.ensino = this.$router.currentRoute.query.ensino as string;
    this.request();
  }

  private async request() {
    try {
      this.$toasted.success('Tudo pronto!', {
        duration: 2500,
      });
    } catch (err) {
      this.$toasted.error('Falha na requisição', {
        duration: 2500,
      });
    }
  }
}
</script>

<style>
</style>
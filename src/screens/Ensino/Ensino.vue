<template>
  <div class="fill-height">
      <Header></Header>

      <v-content>
          <v-container>
              <v-row>
                  <v-col sm="12" md="6">
                      <v-card elevation="1">
                          <v-img max-height="350" src="https://static.biggylabs.com.br/images/clientes/valisere/img/fundamental.jpg">
                            <v-card-title class="align-end fill-height white--text">Fundamental</v-card-title>
                          </v-img>
                          <v-card-text>Ensino Fundamental</v-card-text>
                          <v-card-actions>
                              <router-link style="text-decoration: none;" class="mx-auto" :to="'/study-system-with-vue/ano?&ensino=fundamental'">
                                <v-btn class="teal white--text">Entrar</v-btn>
                              </router-link>
                          </v-card-actions>
                      </v-card>
                  </v-col>
                  <v-col md="6" sm="12" >
                      <v-card elevation="1">
                          <v-img max-height="350" src="https://static.biggylabs.com.br/images/clientes/valisere/img/medio.jpg">
                            <v-card-title class="align-end fill-height white--text">Médio</v-card-title>
                          </v-img>
                          <v-card-text>Ensino Médio</v-card-text>
                          <v-card-actions>
                              <router-link style="text-decoration: none;" class="mx-auto" :to="'/study-system-with-vue/ano?ensino=medio'">
                                <v-btn class="teal white--text mx-auto">Entrar</v-btn>
                              </router-link>
                          </v-card-actions>
                      </v-card>
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
export default class Ensino extends Vue {}
</script>

<style>

</style>
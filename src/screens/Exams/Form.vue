<template>
  <v-container>
    <v-row>
      <v-col>Minhas dificuldades</v-col>
    </v-row>
    <v-row>
      <v-col v-for="(items, index) of matters" :key="index">
        <v-checkbox v-model="selected" :label="items.name" :value="items.name"></v-checkbox>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="hoursForStudy"
          placeholder="Numero de horas para estudo diario"
          color="teal"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn :loading="load" color="teal" class="white--text" @click="updatePlanStudy()">Criar</v-btn>
        <v-btn
          :loading="load"
          color="teal"
          class="white--text ml-3"
          @click="loadPlan()"
        >Carregar ultimo plano salvo</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import subjects from './../Subjects/assets/subjects.json';
import selectDatePerMatter from './../../helpers/planStudy';
import api from '../../service/api';
import Toast from '../../helpers/Toast';

@Component
export default class Difficulties extends Vue {
  private selected: string[] = [];
  private matters = subjects.subjects;
  private load = false;
  private hoursForStudy = 0;

  private updatePlanStudy() {
    this.load = true;

    setTimeout(() => (this.load = false), 2000);
    this.transferResult(
      JSON.stringify(
        selectDatePerMatter(this.selected, this.matters, this.hoursForStudy),
      ),
    );
  }

  private async loadPlan() {
    this.load = true;
    try {
      const res = await api.get('/studyplan');

      this.transferResult(res.data.plan);
    } catch (err) {
      Toast.error('Ops, tivemos um problema! Tente novamente', this);
    }
    this.load = false;
  }

  @Emit('updateCalendar')
  private transferResult(events: string) {
    return events;
  }
}
</script>
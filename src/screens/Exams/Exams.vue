<template>
  <div>
    <Header></Header>
    <v-content>
      <v-container v-show="events.length">
        <v-row>
          <v-col>
            <v-sheet height="350px">
              <v-btn fab text small @click="prevMonth()">
                <v-icon small>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn fab text small @click="nextMonth()">
                <v-icon small>mdi-chevron-right</v-icon>
              </v-btn>
              <v-btn small elevation="0" style="background: transparent;">
                <v-toolbar-title>{{getMonth()}}</v-toolbar-title>
              </v-btn>
              <v-calendar type="month" :value="date" event-color="teal" :events="events"></v-calendar>
            </v-sheet>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-content>
              <v-btn color="teal" class="white--text" @click="savePlan()">Salvar plano</v-btn>
            </v-content>
          </v-col>
        </v-row>
      </v-container>

      <Form @updateCalendar="captureEvents($event)"></Form>
    </v-content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BottomNavigation from './../shared/BottomNavigation/BottomNavigation.vue';
import Header from './../shared/Header/Header.vue';
import Form from './Form.vue';
import api from '../../service/api';
import Toast from '../../helpers/Toast';

@Component({
  components: {
    Header,
    BottomNavigation,
    Form,
  },
})
export default class Exams extends Vue {
  private events = [];
  private months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  private date = `${new Date().getFullYear()}-01-01`;
  private nextMonth(): void {
    const currentMonth = this.indexMonth() === 11 ? 0 : this.indexMonth() + 1;
    this.date = this.date.replace(/\-(..?)\-/, `-${currentMonth + 1}-`);
  }

  private prevMonth(): void {
    const currentMonth = this.indexMonth() === 0 ? 11 : this.indexMonth() - 1;
    this.date = this.date.replace(/\-(..?)\-/, `-${currentMonth + 1}-`);
  }

  private getMonth(): string {
    return this.months[this.indexMonth()];
  }

  private indexMonth(): number {
    return parseInt(this.date.match(/\-(..?)\-/)![1], 10) - 1;
  }

  private captureEvents(events: string) {
    this.events = JSON.parse(events);
  }

  private async savePlan() {
    try {
      await api.post('/studyplan', { plan: JSON.stringify(this.events) });

      Toast.success('Plano de estudo salvo com sucesso!', this);
    } catch (err) {
      Toast.error('Tivemos um problema, tente novamente!', this);
    }
  }
}
</script>
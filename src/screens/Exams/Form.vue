<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="500" :loading="load">
          <v-card-title class="title font-weight-regular justify-space-between">
            <span></span>
            <v-avatar color="teal lighten-2" class="subheading white--text" size="24" v-text="step"></v-avatar>
          </v-card-title>

          <v-window v-model="step">
            <v-window-item :value="1">
              <v-subheader class="gray--text">Minhas dificuldades</v-subheader>
              <v-card-text>
                <v-checkbox
                  color="teal"
                  v-for="(items, index) of matters"
                  class="d-inline-block pa-2"
                  :key="index"
                  v-model="selected"
                  :label="items.name"
                  :value="items.name"
                ></v-checkbox>
              </v-card-text>
            </v-window-item>
          </v-window>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn :disabled="step === 1" text @click="step--" icon>
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn :disabled="step === 1" color="teal" depressed @click="step++" icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>

            <v-btn
              :loading="load"
              color="teal"
              class="white--text"
              :disabled="step < 1"
              @click="updatePlanStudy()"
            >Criar</v-btn>
            <v-btn
              :loading="load"
              color="teal"
              class="white--text ml-3"
              @click="loadPlan()"
            >Carregar plano salvo</v-btn>
          </v-card-actions>
        </v-card>
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
  private matters = subjects.subjects.medio;
  @Prop() private load = false;
  private hoursForStudy = 0;
  private step = 1;

  private updatePlanStudy() {
    setTimeout(() => (this.load = false), 2000);
    this.transferResult(
      JSON.stringify(
        selectDatePerMatter(this.selected, this.matters, 24),
      ),
    );
  }

  private async loadPlan() {
    try {
      const res = await api.get('/studyplan');

      this.transferResult(res.data.plan);
    } catch (err) {
      Toast.error('Ops, tivemos um problema! Tente novamente', this);
    }
  }

  @Emit('updateCalendar')
  private transferResult(events: string) {
    return events;
  }
}
</script>
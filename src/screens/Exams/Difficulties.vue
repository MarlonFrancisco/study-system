<template>
    <v-container class="mt-12">
        <v-row>
            <v-col>
                Minhas dificuldades
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="(items, index) of matters" :key="index">
                <v-checkbox v-model="selected" :label="items.name" :value="items.name"></v-checkbox>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn :loading="load" color="teal" class="white--text" @click="updatePlanStudy()">Salvar</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import subjects from './../Subjects/assets/subjects.json';
import selectDatePerMatter from './../../helpers/planStudy';

@Component({})
export default class Difficulties extends Vue {
    private selected: string[] = [];
    private matters = subjects.subjects;
    private load = false;

    @Emit('updateCalendar')
    public updatePlanStudy() {
        this.load = true;

        setTimeout(() => this.load = false, 2000);
        return JSON.stringify(selectDatePerMatter(this.selected, this.matters));
    }
}
</script>